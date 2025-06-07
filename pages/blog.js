// pages/blog.js
import Link from "next/link";

export async function getStaticProps() {
  const posts = [
    { id: 1, title: "How I Built My First React App" },
    { id: 2, title: "Understanding Next.js: A Deep Dive" },
    { id: 3, title: "Why I Love JavaScript" },
  ];

  return {
    props: { posts },
  };
}

export default function Blog({ posts }) {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">My Blog</h1>
      <div className="list-group">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="list-group-item list-group-item-action p-3 mb-2 shadow-sm"
          >
            <h5 className="mb-1">{post.title}</h5>
            <small>Click to read more...</small>
          </Link>
        ))}
      </div>
    </div>
  );
}
