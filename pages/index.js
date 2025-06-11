// pages/index.js
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Define handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="container text-center py-5">
      {/* Hero Section */}
      <div className="row align-items-center">
        {/* Left Side (Text Section) */}
        <div className="col-md-6 text-left">
          <h1 className="display-4 animated fadeIn">Full Stack Developer</h1>
          <p className="lead animated fadeIn delay-1s">
            Hi, I am Nirmal Khadka
          </p>
          <p className="animated fadeIn delay-2s">
            10+ Full Stack Development Projects
            <br />
            2+ AI Integrated Full Stack Development Projects
          </p>
        </div>

        {/* Right Side (Photo Section) */}
        <div className="col-md-6">
          <div
            className="hero-photo"
            style={{
              width: "250px",
              height: "250px",
              margin: "0 auto",
              borderRadius: "15px",
              overflow: "hidden",
              border: "4px solid #d1d8e0",
            }}
          >
            <img
              src="/images/100180381.jpeg" // Replace with your image path
              alt="Hero Photo"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4">
        <Link href="/about" className="btn btn-outline-secondary mx-2">
          About Me
        </Link>
        <Link href="/blog" className="btn btn-outline-secondary mx-2">
          Blog
        </Link>
        <Link href="/contact" className="btn btn-outline-secondary mx-2">
          Contact Me
        </Link>
        <Link href="/certificate" className="btn btn-outline-secondary mx-2">
          Certificate
        </Link>

      </div>

      {/* Projects Section */}
      <div className="row mt-5">
        <h1 className="display-4 text-center mb-4">Projects</h1>
        <div className="col-md-4">
          <div className="card">
            <a
              href="https://github.com/Nirmalkhadka/React-query"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/1.png"
                className="card-img-top"
                alt="Project 1"
                id="card2-3"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Project 1: React Query</h5>
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <a
              href="https://github.com/Nirmalkhadka/EV-Station-Finder-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/2.png"
                className="card-img-top"
                alt="Project 2"
                id="card2-3"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Project 2: EV Station Finder</h5>
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <a
              href="https://github.com/Nepal-College-of-Information-Technology/ai-mini-project-pands"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/download.jpeg"
                className="card-img-top"
                alt="Project 3"
                id="card2-3"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Sign Talk Web App</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Side (Text Section) */}
          <div className="col-md-6 text-left">
            <h1 className="display-4 animated fadeIn">
              Got a project in mind? Let's build together
            </h1>
          </div>

          {/* Right Side (Contact Button) */}
          <div className="col-md-6 text-center">
            <Link href="/contact">
              <button className="btn btn-primary animated slideInRight">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
