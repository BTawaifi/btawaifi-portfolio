import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub, faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/contact.css";

const ContactFooter = () => {
  return (
    <div className="contact-section">
      <Container>
        <div className="contact-header">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            I'm a <strong>Senior Full-Stack Engineer</strong> with five years running a live, real-time sports-data platform. Best fit: TypeScript, Node.js, React, and real-time data systems, with AI-assisted delivery and remote work.
          </p>
        </div>
      </Container>

      <Container fluid className="contact-content">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <div className="contact-card">
              <Row>
                <Col md={6} className="contact-info-col">
                  <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <div className="contact-methods">
                      <a className="contact-method" href="mailto:boutros.m.tawaifi@gmail.com">
                        <div className="method-icon">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="method-details">
                          <h4>Email</h4>
                          <p>boutros.m.tawaifi@gmail.com</p>
                        </div>
                      </a>

                      {/* Keep in sync with the CV: +20 150 091 4800 */}
                      <a className="contact-method" href="tel:+201500914800">
                        <div className="method-icon">
                          <FontAwesomeIcon icon={faPhoneAlt} />
                        </div>
                        <div className="method-details">
                          <h4>Phone</h4>
                          <p>+20 150 091 4800</p>
                        </div>
                      </a>

                      <div className="contact-method">
                        <div className="method-icon">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div className="method-details">
                          <h4>Location</h4>
                          <p>Cairo, Egypt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="social-col">
                  <div className="social-info">
                    <h3>Connect & Download</h3>
                    <div className="social-buttons">
                      <a href="https://github.com/btawaifi" target="_blank" rel="noopener noreferrer" className="social-btn github-btn">
                        <FontAwesomeIcon icon={faGithub} />
                        <span>GitHub</span>
                      </a>
                      <a href="https://www.linkedin.com/in/boutros-tawaifi" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                    <div className="resume-section">
                      <a 
                        href="downloads/Boutros_Tawaifi_CV.docx"
                        download={true}
                        className="resume-btn"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                        <span style={{ marginLeft: "0.5em" }}>Download Resume</span>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactFooter; 