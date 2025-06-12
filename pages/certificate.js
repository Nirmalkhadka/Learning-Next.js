// pages/certificate.js
import Link from 'next/link';

const certificates = [
  {
    id: 1,
    image: '/images/ai.jpg',
    title: 'Certificate 1: NCIT AINN Project Demonstration ',
    githubLink: 'https://github.com/Nepal-College-of-Information-Technology/ai-mini-project-pands',
  },
  {
    id: 2,
    image: '/images/hack.jpg',
    title: 'Certificate 2: NCIT HACKFEST 2024',
    githubLink: 'https://github.com/Nirmalkhadka/Profile-Managment-Website',
  },
  // Add more certificates here as needed
];

export default function Certificates() {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">My Certificates</h1>

      <div className="row">
        {certificates.map((certificate) => (
          <div className="col-12 mb-5" key={certificate.id}>
            <div className="certificate-card">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="img-fluid certificate-image"
              />
              <div className="certificate-overlay">
                <h5>{certificate.title}</h5>
                <p>Click to read more</p>
              </div>
              <Link href={certificate.githubLink} className="stretched-link">
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .certificate-card {
          position: relative;
          max-width: 100%;
          height: auto;
          overflow: hidden;
          cursor: pointer;
        }

        .certificate-image {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease-in-out;
        }

        .certificate-card:hover .certificate-image {
          transform: scale(1.1);
        }

        .certificate-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          background-color: rgba(0, 0, 0, 0.6);
          padding: 20px;
          border-radius: 10px;
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .certificate-card:hover .certificate-overlay {
          visibility: visible;
          opacity: 1;
        }

        .stretched-link {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `}</style>
    </div>
  );
}
