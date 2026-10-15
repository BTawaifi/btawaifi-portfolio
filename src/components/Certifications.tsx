import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import uciLogo from "../assets/img/orgs/uci.svg";
import ibmLogo from "../assets/img/orgs/ibm.svg";
import educativeLogo from "../assets/img/orgs/educative.svg";
import testdomeLogo from "../assets/img/orgs/testdome.svg";
import datacampLogo from "../assets/img/orgs/datacamp.svg";
import freecodecampLogo from "../assets/img/orgs/freecodecamp.svg";
import "../assets/css/certifications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming with Google Go Specialization",
      alt: "University of California, Irvine logo",
      issuer: "Coursera - University of California, Irvine",
      link: "https://coursera.org/verify/specialization/VDFKNBLPYJ7F",
      logo: uciLogo
    },
    {
      title: "Generative AI: Introduction and Applications",
      alt: "IBM logo",
      issuer: "Coursera - IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/XIRF8I0IYPK3",
      logo: ibmLogo
    },
    {
      title: "Microservices Architecture",
      alt: "Educative logo",
      issuer: "Educative",
      link: "https://www.educative.io/verify-certificate/GZjlABC06vXYy5mn7uWjxgK1M7W8Um",
      logo: educativeLogo
    },
    {
      title: "Up and running with Node and GraphQL",
      alt: "Educative logo",
      issuer: "Educative",
      link: "https://www.educative.io/verify-certificate/ym0PjYDOj1vf0jLZXpB9GqfkD8WZPzMk1Tm",
      logo: educativeLogo
    },
    {
      title: "HTML/CSS, React, and Node.js",
      alt: "TestDome logo",
      issuer: "TestDome",
      link: "https://www.testdome.com/certificates/b7406d624e39488f84e5c0253bc738fd",
      logo: testdomeLogo
    },
    {
      title: "Generative AI Essentials",
      alt: "IBM logo",
      issuer: "Coursera - IBM",
      link: "https://www.credly.com/badges/4e6e0b66-3633-4ba5-bff9-f1a39d32a397",
      logo: ibmLogo
    },
    {
      title: "Introduction to Cloud Computing",
      alt: "IBM logo",
      issuer: "Coursera - IBM",
      link: "https://www.coursera.org/account/accomplishments/certificate/XB4C38D32R2T",
      logo: ibmLogo
    },
    {
      title: "ChatGPT Prompt Engineering for Developers",
      alt: "DataCamp logo",
      issuer: "DataCamp",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/1e46dcbcb5aa1e16812cc29eeaba7e57ec7c3758",
      logo: datacampLogo
    },
    {
      title: "Responsive Web Design",
      alt: "freeCodeCamp logo",
      issuer: "freeCodeCamp",
      link: "https://freecodecamp.org/certification/btawaifi/responsive-web-design",
      logo: freecodecampLogo
    },
  ];

  return (
    <div className="certifications-container">
      <Container>
        <h2 className="certifications-title">Certifications</h2>
      </Container>

      <Container fluid className="certifications-content">
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-header">
                <div className="certification-icon-wrapper">
                  <img className="certification-logo" src={cert.logo} alt={cert.alt} loading="lazy" />
                </div>
                <div className="certification-info">
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                </div>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certification-overlay"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>Verify</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Certifications; 