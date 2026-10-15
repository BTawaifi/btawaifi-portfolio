import { Badge, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../assets/css/experience.css";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  tech: string[];
};

// Kept in line with the CV (Boutros_Tawaifi_Developer_Resume_2026). Only figures that are verified
// or explicitly labelled as the author's own measurement appear here.
const experience: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Orbit Sports Data",
    period: "Oct 2021 — Present",
    location: "Remote",
    highlights: [
      "Took over a small inherited system in 2021 and grew it into a platform running 20–50 live matches a day.",
      "Built third-party coverage ingestion (Extended Live): live match data from several providers, mapped into Orbit's format, de-duplicated and reconciled, with a customer-facing showcase app.",
      "Built the live event pipeline: de-duplication, reversal handling (e.g. cancelled goals) and strict event order, delivered to customers over WebSocket, RabbitMQ and REST at 70–150 ms request/response (own measurement).",
      "Built a Go scheduler and Node.js workers (Chrome DevTools Protocol) that track market odds for up to 300 matches at once into TimescaleDB and Redis, used to verify reporter events in real time.",
      "Extended the React reporter apps (lineups, substitutions, penalty shootouts, basketball quarters) and the Angular admin's moderator tools.",
      "Built trial accounts limited by region and competition, and a new customer dashboard.",
      "Added 3,000+ automated tests (208 suites), SonarQube and Semgrep scans, and replay tools that re-run recorded matches to verify fixes.",
      "Ran production infrastructure on AWS (EC2, Docker, private subnets, Security Groups, IP-allowlisted SSH, secrets in SSM). Backend deploys run reviewed database migrations, a PM2 restart and health checks.",
      "Introduced AI coding agents for feature work and test generation on legacy code; every agent-written change is reviewed, and LLM-generated test data was replaced with deterministic generators."
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "React",
      "Angular",
      "Go",
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
      "RabbitMQ",
      "WebSocket",
      "AWS EC2",
      "Docker",
      "PM2"
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section" aria-labelledby="experience-title">
      <Container>
        <header className="experience-header">
          <h2 id="experience-title" className="experience-title">Experience</h2>
          <p className="experience-subtitle">
            Sole engineer on a live sports-data platform since 2021, working directly with the founders.
          </p>
        </header>

        <div className="experience-timeline">
          {experience.map((job, index) => (
            <motion.article
              key={job.company + job.role}
              className="experience-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="experience-meta">
                <div className="experience-role">{job.role}</div>
                <div className="experience-company">
                  {job.company}
                  {job.location ? <span className="experience-location"> · {job.location}</span> : null}
                </div>
                <div className="experience-period">{job.period}</div>
              </div>

              <ul className="experience-highlights">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="experience-tech">
                {job.tech.map((t) => (
                  <Badge key={t} bg="secondary" className="experience-badge">{t}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
