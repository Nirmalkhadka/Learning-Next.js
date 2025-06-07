// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4">Welcome to My Portfolio</h1>
      <p className="lead">I’m a web developer with experience in React, Next.js, and more!</p>
      <div className="mt-4">
        <Link href="/about"
          className="btn btn-primary mx-2">About Me
        </Link>
        <Link href="/blog"
          className="btn btn-primary mx-2">Blog
        </Link>
        <Link href="/contact"
          className="btn btn-primary mx-2">contact
        </Link>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <img src="/images/project1.jpeg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">A brief description of the first project I want to showcase.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/images/project2.jpeg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">A brief description of the second project I want to showcase.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/images/project3.jpeg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">A brief description of the third project I want to showcase.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}