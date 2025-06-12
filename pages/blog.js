// pages/blog.js
import Link from "next/link";

export async function getStaticProps() {
  const posts = [
    { id: 1, title: "How I Built My First React App", image: "/images/post1.jpeg" },
    { id: 2, title: "Understanding Next.js: A Deep Dive", image: "/images/post2.png" },
    { id: 3, title: "Why I Love JavaScript", image: "/images/post3.jpeg" },
  ];

  return {
    props: { posts },
  };
}

export default function Blog({ posts }) {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">My Blog</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <div className="card shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">Click to read more...</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
