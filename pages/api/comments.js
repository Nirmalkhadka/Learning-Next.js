// pages/api/comments.js

let comments = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, comment } = req.body;

    // Save comment (in-memory for now)
    comments.push({ name, comment });
    return res.status(200).json({ message: 'Comment added!' });
  } else {
    return res.status(200).json({ comments });
  }
}
