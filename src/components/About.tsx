import { motion } from "framer-motion";
import { Container, Nav, Image, Button } from "react-bootstrap";
import Avatar from "../assets/img/BT.webp";
import "../assets/css/about.css";

const About = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToContact = () => scrollToSection("contact");
  const scrollToProjects = () => scrollToSection("projects");

  return (
    <Container className="about-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-container-inner"
      >
        <div className="about-card">
          <div className="about-content">
            <div className="about-left">
              <motion.div
                className="about-image-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="about-image-container">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image 
                      src={Avatar} 
                      alt="Boutros Tawaifi" 
                      className="avatar" 
                      roundedCircle 
                      width={220} 
                      height={220}
                      loading="lazy"
                    />
                  </motion.div>
                </div>
                <motion.div 
                  className="resume-link-container"
                  whileHover={{ scale: 1.02 }}
                >
                  <Nav.Link
                    className="about-btn-download-resume"
                    href="#/resume"
                  >
                    <motion.div 
                      className="download-button"
                      whileHover={{ scale: 1.05 }}
                    >
                      Resume
                      <div className="button-underline" />
                    </motion.div>
                  </Nav.Link>
                </motion.div>
              </motion.div>
            </div>

            <div className="about-right">
              <div className="about-header">
                <motion.h1 
                  className="about-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Boutros Tawaifi
                </motion.h1>
                <h2 className="about-subtitle">Senior Full-Stack Engineer | TypeScript · Node.js · React · Angular | Real-Time Data · AI-Native</h2>
              </div>

              <div className="about-main">
                <div className="about-description">
                  <p>
                    I build <span className="highlight">real-time production systems</span>, from live data ingestion to the apps on top. Five years as the sole engineer on a live sports-data platform, working with AI coding agents where every change is reviewed and tested.
                  </p>

                  <ul className="about-highlights" aria-label="Key outcomes">
                    <li>
                      <span className="highlight">Orbit Sports Data:</span> a platform that has covered 50K+ matches across 70+ countries, with 1,000+ active analysts.
                    </li>
                    <li>
                      <span className="highlight">Live event pipeline:</span> de-duplication, reversal handling and strict event order, with customer feeds at 70–150 ms request/response.
                    </li>
                    <li>
                      <span className="highlight">Customer delivery:</span> feeds over WebSocket, RabbitMQ and REST, with per-customer access control.
                    </li>
                  </ul>

                  <div className="about-proof-strip" aria-label="Proof points">
                    <div className="proof-item">
                      <div className="proof-value">50K+</div>
                      <div className="proof-label">Matches reported</div>
                    </div>
                    <div className="proof-item">
                      <div className="proof-value">70–150 ms</div>
                      <div className="proof-label">Feed latency</div>
                    </div>
                    <div className="proof-item">
                      <div className="proof-value">1,000+</div>
                      <div className="proof-label">Active analysts</div>
                    </div>
                  </div>

                  <div className="actions-container">
                                      <Button 
                    variant="primary" 
                    className="contact-button"
                    onClick={scrollToContact}
                    aria-label="Navigate to contact section"
                  >
                    Start a Conversation
                  </Button>

                  <Button
                    variant="outline-light"
                    className="about-secondary-button"
                    onClick={scrollToProjects}
                    aria-label="Navigate to projects section"
                  >
                    View Projects
                  </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default About;