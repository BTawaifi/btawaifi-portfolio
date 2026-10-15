import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// The full CV is the current two-page DOCX (public/downloads). The page is a summary plus a download,
// so there is one source of truth for the detail.
const ResumeRoute = () => {
  return (
    <>
      <Helmet>
        <title>Resume | Boutros Tawaifi</title>
        <meta name="description" content="Boutros Tawaifi, Senior Full-Stack Engineer: TypeScript, Node.js, React, Angular and real-time data systems." />
      </Helmet>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ minHeight: "100vh", padding: "96px 16px 64px", color: "var(--bs-body-color, #1b2430)" }}
      >
        <Container style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: "2rem", marginBottom: 4 }}>Boutros Tawaifi</h1>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Senior Full-Stack Engineer</p>
          <p style={{ marginBottom: 20 }}>
            Five years building and running a live, real-time sports-data platform: 50K+ matches reported across 70+ countries,
            with customer feeds over WebSocket, RabbitMQ and REST. TypeScript, Node.js, React, Angular, Go, PostgreSQL and AWS.
          </p>
          <div className="d-flex flex-wrap" style={{ gap: 12 }}>
            <Button href="downloads/Boutros_Tawaifi_CV.docx" variant="primary">
              Download CV: full-stack and AI (DOCX)
            </Button>
            <Button href="downloads/Boutros_Tawaifi_CV_RealTime.docx" variant="outline-primary">
              Download CV: real-time and backend (DOCX)
            </Button>
          </div>
          <div style={{ marginTop: 24 }}>
            <Button href="#/" variant="outline-secondary">Back to portfolio</Button>
          </div>
        </Container>
      </motion.main>
    </>
  );
};

export default ResumeRoute;
