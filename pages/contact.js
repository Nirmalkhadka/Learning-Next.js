import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    // Replace 'service_id', 'template_id', and 'user_id' with your actual EmailJS details
emailjs
  .send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    templateParams,
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  )


      .then(
        (response) => {
          setStatus('Message sent successfully!');
                    console.error('sending email:', response);
// Clear form fields after successful submission
          setName('');
          setEmail('');
          setMessage('');
        
        },
        (error) => {
          setStatus('Error sending message. Please try again.');
          console.error('Error sending email:', error);
        }
      );
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
}
