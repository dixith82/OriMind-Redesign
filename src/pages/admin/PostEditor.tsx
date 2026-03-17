import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ArrowLeft, Save, Eye, Image, Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered, Quote, Undo, Redo } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdmin } from "@/hooks/useAdmin";
import SEOHead from "@/components/SEOHead";

const categories = ["general", "engineering", "product", "ai research", "company"];

const PostEditor = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const navigate = useNavigate();
  const { isAdmin, loading: adminLoading, user } = useAdmin();
  const editorRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("general");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [featuredImage, setFeaturedImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Load existing post
  const { data: existingPost } = useQuery({
    queryKey: ["admin-post", id],
    queryFn: async () => {
      if (isNew) return null;
      const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single();
      if (error) throw error;
      return data;
    },
    enabled: !isNew && isAdmin,
  });

  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setSlug(existingPost.slug);
      setExcerpt(existingPost.excerpt || "");
      setCategory(existingPost.category);
      setStatus(existingPost.status as "draft" | "published");
      setFeaturedImage(existingPost.featured_image || "");
      if (editorRef.current) {
        editorRef.current.innerHTML = existingPost.content;
      }
    }
  }, [existingPost]);

  // Auto-generate slug from title
  useEffect(() => {
    if (isNew && title) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  }, [title, isNew]);

  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}.${ext}`;

    const { data, error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file);

    if (error) {
      alert("Upload failed: " + error.message);
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("blog-images")
      .getPublicUrl(data.path);

    setUploading(false);
    return urlData.publicUrl;
  };

  const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = await handleImageUpload(e);
    if (url) setFeaturedImage(url);
  };

  const insertImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = await handleImageUpload(e);
    if (url) {
      execCommand("insertHTML", `<img src="${url}" alt="Blog image" style="max-width:100%;border-radius:8px;margin:1rem 0;" />`);
    }
  };

  const handleSave = async () => {
    if (!title.trim() || !slug.trim()) {
      alert("Title and slug are required.");
      return;
    }

    setSaving(true);
    const content = editorRef.current?.innerHTML || "";

    const postData = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim() || null,
      content,
      category,
      status,
      featured_image: featuredImage || null,
      author_id: user?.id || null,
    };

    let error;
    if (isNew) {
      ({ error } = await supabase.from("blog_posts").insert(postData));
    } else {
      ({ error } = await supabase.from("blog_posts").update(postData).eq("id", id));
    }

    setSaving(false);
    if (error) {
      alert("Save failed: " + error.message);
    } else {
      navigate("/admin");
    }
  };

  if (adminLoading) return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Loading...</div>;
  if (!isAdmin) {
    navigate("/admin/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead title={isNew ? "New Post — Admin" : "Edit Post — Admin"} />

      {/* Header */}
      <header className="border-b border-border px-6 py-3 flex items-center justify-between sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link to="/admin" className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="font-display font-bold text-sm">{isNew ? "New Post" : "Edit Post"}</span>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "draft" | "published")}
            className="text-sm px-3 py-1.5 rounded-lg border border-border bg-card text-foreground focus:outline-none"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
          {!isNew && slug && (
            <a href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground">
              <Eye className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Meta fields */}
        <div className="space-y-4 mb-8">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title..."
            className="w-full font-display text-3xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground/30"
          />
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs text-muted-foreground mb-1 block">Slug</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="w-[200px]">
              <label className="text-xs text-muted-foreground mb-1 block">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm text-foreground focus:outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Brief description..."
            />
          </div>

          {/* Featured image */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Featured Image</label>
            <div className="flex items-center gap-3">
              {featuredImage && (
                <img src={featuredImage} alt="Featured" className="w-20 h-14 object-cover rounded-lg border border-border" />
              )}
              <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer text-sm text-muted-foreground">
                <Image className="w-4 h-4" />
                {uploading ? "Uploading..." : featuredImage ? "Change" : "Upload"}
                <input type="file" accept="image/*" onChange={handleFeaturedImageUpload} className="hidden" />
              </label>
              {featuredImage && (
                <button onClick={() => setFeaturedImage("")} className="text-xs text-destructive hover:underline">Remove</button>
              )}
            </div>
          </div>
        </div>

        {/* Rich text toolbar */}
        <div className="sticky top-[57px] z-40 border border-border rounded-t-lg bg-card px-3 py-2 flex items-center gap-1 flex-wrap">
          <button onClick={() => execCommand("bold")} className="p-2 rounded hover:bg-accent" title="Bold"><Bold className="w-4 h-4" /></button>
          <button onClick={() => execCommand("italic")} className="p-2 rounded hover:bg-accent" title="Italic"><Italic className="w-4 h-4" /></button>
          <div className="w-px h-5 bg-border mx-1" />
          <button onClick={() => execCommand("formatBlock", "h1")} className="p-2 rounded hover:bg-accent" title="Heading 1"><Heading1 className="w-4 h-4" /></button>
          <button onClick={() => execCommand("formatBlock", "h2")} className="p-2 rounded hover:bg-accent" title="Heading 2"><Heading2 className="w-4 h-4" /></button>
          <button onClick={() => execCommand("formatBlock", "h3")} className="p-2 rounded hover:bg-accent" title="Heading 3"><Heading3 className="w-4 h-4" /></button>
          <div className="w-px h-5 bg-border mx-1" />
          <button onClick={() => execCommand("insertUnorderedList")} className="p-2 rounded hover:bg-accent" title="Bullet list"><List className="w-4 h-4" /></button>
          <button onClick={() => execCommand("insertOrderedList")} className="p-2 rounded hover:bg-accent" title="Numbered list"><ListOrdered className="w-4 h-4" /></button>
          <button onClick={() => execCommand("formatBlock", "blockquote")} className="p-2 rounded hover:bg-accent" title="Blockquote"><Quote className="w-4 h-4" /></button>
          <div className="w-px h-5 bg-border mx-1" />
          <label className="p-2 rounded hover:bg-accent cursor-pointer" title="Insert image">
            <Image className="w-4 h-4" />
            <input type="file" accept="image/*" onChange={insertImage} className="hidden" />
          </label>
          <div className="w-px h-5 bg-border mx-1" />
          <button onClick={() => execCommand("undo")} className="p-2 rounded hover:bg-accent" title="Undo"><Undo className="w-4 h-4" /></button>
          <button onClick={() => execCommand("redo")} className="p-2 rounded hover:bg-accent" title="Redo"><Redo className="w-4 h-4" /></button>
          <div className="w-px h-5 bg-border mx-1" />
          <select
            onChange={(e) => execCommand("fontSize", e.target.value)}
            className="text-xs px-2 py-1 rounded border border-border bg-card text-foreground focus:outline-none"
            defaultValue="3"
          >
            <option value="1">Small</option>
            <option value="3">Normal</option>
            <option value="5">Large</option>
            <option value="7">Huge</option>
          </select>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          className="rich-text-editor min-h-[400px] border border-t-0 border-border rounded-b-lg p-6 focus:outline-none text-foreground/90 leading-relaxed bg-card"
          style={{ whiteSpace: "pre-wrap" }}
          onPaste={(e) => {
            e.preventDefault();
            const text = e.clipboardData.getData("text/html") || e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, text);
          }}
        />
      </div>
    </div>
  );
};

export default PostEditor;
