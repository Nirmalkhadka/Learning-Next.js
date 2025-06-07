// pages/blog/[id].js
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  // Placeholder content for each post
  const postContent = {
    1: "This is the content of 'How I Built My First React App'.",
    2: "This is the content of 'Understanding Next.js: A Deep Dive'.",
    3: "This is the content of 'Why I Love JavaScript'.",
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Blog Post {id}</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Post {id} Title</h5>
          <p className="card-text">{postContent[id]}</p>
        </div>
      </div>
    </div>
  );
}
