// pages/api/contact.js
import sendGridMail from '@sendgrid/mail';

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const msg = {
      to: 'chattribeast@gmail.com', // Replace with your email address
      from: email, // The sender's email
      subject: `Message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      await sendGridMail.send(msg);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      return res.status(500).json({ message: 'Error sending message. Please try again.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  
}
