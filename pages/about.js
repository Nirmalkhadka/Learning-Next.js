// pages/about.js
import { useState } from 'react';

export default function About() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, comment }),
    });

    if (res.ok) {
      const data = await res.json();
      setComments((prev) => [...prev, { name, comment }]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4 animated fadeIn">About Me</h1>
      <p className="lead text-center animated fadeIn delay-1s">
        I'm a passionate web developer with experience in building modern web applications using
        React, Next.js, and other technologies.
      </p>
      <div className="row mt-4">
        <div className="col-md-6 animated slideInLeft delay-1s">
          <h3>Skills</h3>
          <ul className="list-unstyled">
            <li>React.js</li>
            <li>Next.js</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js & Express.js</li>
            <li>HTML, CSS, Tailwind CSS</li>
          </ul>
        </div>
        </div>
        <div className="col-md-6 animated slideInRight delay-2s">
          <h3>Experience</h3>
          <p>I've worked on multiple full-stack web applications, focusing on front-end development and optimizing user interfaces.</p>
        </div>

      {/* Comment Form */}
      <div className="mt-4">
        <h3>Leave a Comment</h3>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {/* Display Comments */}
      <div className="mt-4">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}</strong>: {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
