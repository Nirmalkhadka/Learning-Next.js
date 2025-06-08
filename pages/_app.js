// pages/_app.js
import { useEffect } from 'react';
import Head from 'next/head'; // Correct import
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Link from "next/link";

// Navbar component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          NK Nirmal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary mx-2" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

// Main App Component
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:description" content="A showcase of my web development work" />
        <meta property="og:image" content="/images/portfolio-image.jpg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <Navbar />  {/* Navbar added */}
      <Component {...pageProps} /> {/* Render the current page component */}
    </>
  );
}

export default MyApp;
