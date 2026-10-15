import ReactDOM from 'react-dom/client'; // Updated import
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container); // Create a root.

  // Initial render
  root.render(
    <>
      <Helmet>
        <title>Boutros Tawaifi | Senior Full-Stack Engineer (TypeScript, Node.js, React)</title>

        {/* Canonical Link */}
        <link rel="canonical" href="https://btawaifi-portfolio.vercel.app/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Meta Tags */}
        <meta
          name="description"
          content="Product-focused full-stack engineer building and operating production web systems. React/Angular, TypeScript, Node.js, Redis, RabbitMQ, AWS EC2/Linux — with AI-assisted delivery workflows."
        />
        <meta
          name="keywords"
          content="Senior Full-Stack Engineer, Full-Stack Engineer, React, Angular, TypeScript, Node.js, AWS EC2, Linux, Redis, SQL, PostgreSQL, Docker, RabbitMQ, System Design, AI Integration, Portfolio"
        />
        <meta name="author" content="Boutros Tawaifi" />

        <meta property="og:url" content="https://btawaifi-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Boutros Tawaifi | Senior Full-Stack Engineer (TypeScript, Node.js, React)"
        />
        <meta
          property="og:description"
          content="Product-focused full-stack engineer shipping and operating production systems (React/Angular, Node.js/TypeScript, Redis, RabbitMQ, AWS EC2/Linux) with AI-assisted delivery workflows."
        />
        <meta
          property="og:image"
          content="https://btawaifi-portfolio.vercel.app/static/media/BT.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://btawaifi-portfolio.vercel.app/" />
        <meta
          name="twitter:title"
          content="Boutros Tawaifi | Senior Full-Stack Engineer (TypeScript, Node.js, React)"
        />
        <meta
          name="twitter:description"
          content="Product-focused full-stack engineer shipping and operating production systems with AI-assisted delivery workflows."
        />
        <meta
          name="twitter:image"
          content="https://btawaifi-portfolio.vercel.app/static/media/BT.webp"
        />

      </Helmet>
      <App />
    </>
  );
} else {
  console.error('Root element not found');
}
