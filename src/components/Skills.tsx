import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCogs,
  faChartLine,
  faPalette,
  faCube,
  faVideo,
  faRobot,
  faMicrochip,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../assets/css/skills.css";

const Skills = () => {

  // Skills mirror the CV's skills section. Only tools that appear in the CV or in real project work are listed.
  const [showMultidisciplinary, setShowMultidisciplinary] = useState(false);

  const coreStack = [
    "TypeScript",
    "Node.js",
    "React",
    "Angular",
    "PostgreSQL",
    "TimescaleDB",
    "Redis",
    "RabbitMQ",
    "AWS",
    "Docker"
  ];

  const services = [
    {
      title: "Frontend",
      description: "React and Angular apps for live reporting, admin and customer portals.",
      technologies: ["React", "Angular", "Next.js", "Redux", "Material UI", "Tailwind CSS", "i18n/RTL"],
      icon: faGlobe
    },
    {
      title: "Backend & Data",
      description: "Real-time ingestion, customer feeds and time-series storage.",
      technologies: ["Node.js", "Express", "TypeORM", "Drizzle ORM", "REST APIs", "WebSocket", "RabbitMQ (AMQP)", "OpenAPI", "PostgreSQL", "TimescaleDB", "MySQL", "Redis"],
      icon: faCogs
    },
    {
      title: "Cloud & DevOps",
      description: "Production on AWS with scripted deploys, migrations and health checks.",
      technologies: ["AWS EC2", "VPC", "Security Groups", "SSM Parameter Store", "Linux", "Docker", "PM2", "CI/CD (GitHub Actions)"],
      icon: faRocket
    },
    {
      title: "AI-Native Development",
      description: "Building with coding agents, with every change reviewed and tested.",
      technologies: ["Claude Code", "Codex", "MCP", "LLM APIs (Claude, OpenAI, Gemini)"],
      icon: faRobot
    },
    {
      title: "Testing & Quality",
      description: "Automated tests, static analysis and replay tooling.",
      technologies: ["Jest", "Vitest", "Supertest", "SonarQube", "Semgrep", "Replay tools"],
      icon: faChartLine
    }
  ];
  const engineeringServices = services;

  const multidisciplinaryServices = [
    {
      title: "Embedded & IoT (background)",
      description: "Embedded systems and IoT work from my computer engineering background.",
      technologies: ["Arduino", "C++", "C#", "Linux", "VHDL"],
      icon: faMicrochip
    },
    {
      title: "Logo & Brand Design",
      description: "Brand identity and visual design to support product and marketing goals.",
      technologies: ["Photoshop", "Illustrator", "Figma", "Retouching", "Compositing"],
      icon: faPalette
    },
    {
      title: "3D Modeling & Animation",
      description: "3D modeling, texturing, and animation for visual content and prototyping.",
      technologies: ["Maya", "ZBrush", "Unity Engine", "Unreal Engine"],
      icon: faCube
    },
    {
      title: "Video Post-Production",
      description: "Video editing and post-production for professional content.",
      technologies: ["Premiere", "After Effects", "Color Grading"],
      icon: faVideo
    }
  ];




  return (
    <div>
      <div className="skills-container">
        <Container>
          <h2 className="skills-title">Engineering Toolkit</h2>
          <div className="skills-subtitle">
            Strong full-stack delivery with architecture, performance, reliability, and production ownership.
          </div>
          <div className="skills-core-tags" aria-label="Core stack">
            {coreStack.map((tech) => (
              <span key={tech} className="skills-core-tag">{tech}</span>
            ))}
          </div>
        </Container>

        <Container fluid className="skills-carousel">
          <div className="services-grid">
            {engineeringServices.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-header">
                  <div className="service-icon-wrapper">
                    <FontAwesomeIcon icon={service.icon} className="service-icon" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="tech-tags-container">
                  <div className="tech-tags">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>

        <Container className="skills-toggle-container">
          <button
            className="skills-toggle-button"
            onClick={() => setShowMultidisciplinary((v) => !v)}
            aria-expanded={showMultidisciplinary}
          >
            {showMultidisciplinary ? "Hide" : "Show"} multidisciplinary background
          </button>
        </Container>

        {showMultidisciplinary && (
          <Container fluid className="skills-carousel">
            <div className="services-grid">
              {multidisciplinaryServices.map((service) => (
                <div key={service.title} className="service-card">
                  <div className="service-header">
                    <div className="service-icon-wrapper">
                      <FontAwesomeIcon icon={service.icon} className="service-icon" />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="tech-tags-container">
                    <div className="tech-tags">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Skills;
