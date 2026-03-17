const AdminDashboard = () => {

const posts = [
{id:1,title:"Future of AI"},
{id:2,title:"Building infinall.ai"}
];

return (

<div className="min-h-screen bg-black text-white px-8 py-24">

  <div className="max-w-4xl mx-auto">

    <div className="flex justify-between items-center mb-10">

      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <a
        href="/admin/posts/new"
        className="bg-cyan-400 text-black px-5 py-2 rounded"
      >
        New Post
      </a>

    </div>

    <div className="space-y-4">

      {posts.map(post => (

        <div
          key={post.id}
          className="bg-gray-900 border border-gray-800 p-5 rounded flex justify-between"
        >

          <span>{post.title}</span>

          <a
            href={`/admin/posts/${post.id}`}
            className="text-cyan-400"
          >
            Edit
          </a>

        </div>

      ))}

    </div>

  </div>

</div>

);
};

export default AdminDashboard;
