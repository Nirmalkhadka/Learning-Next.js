// pages/blog/post1.js
export default function Post1() {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">How I Built My First React App</h1>

      {/* Image Section */}
      <div className="text-center mb-4">
        <img
          src="/images/post1.jpg"
          alt="Post 1 Image"
          className="img-fluid rounded shadow-sm"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>

      {/* Description Section */}
      <p className="lead">
        {/* Placeholder for your blog description */}
        This is where the detailed description of the post will go. You can provide the length of the description here. 
        For example, you can talk about your experience building your first React app, challenges you faced, and what you learned in the process.
      </p>
    </div>
  );
}
