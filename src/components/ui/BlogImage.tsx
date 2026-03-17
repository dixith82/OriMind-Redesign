import { useState } from "react";
import { Image } from "lucide-react";

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlogImage = ({ src, alt, className = "" }: BlogImageProps) => {
  const [error, setError] = useState(false);

  // Default fallback images based on category or random
  const fallbackImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    "https://images.unsplash.com/photo-1675557009875-436f1ccef3c0?w=800",
    "https://images.unsplash.com/photo-1676277791608-ac54525aa09d?w=800",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  ];

  // Generate consistent fallback based on alt text
  const getFallbackImage = () => {
    const index = alt.length % fallbackImages.length;
    return fallbackImages[index];
  };

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-cyan-500/10 to-purple-500/10 ${className}`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
          <div className="text-center">
            <Image className="w-12 h-12 text-cyan-400/40 mx-auto mb-2" />
            <p className="text-xs text-white/30">{alt}</p>
          </div>
        </div>
      )}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default BlogImage;