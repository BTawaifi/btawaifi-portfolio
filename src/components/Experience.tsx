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

// Kept in line with the CV (Boutros_Tawaifi_Resume_2026). Only figures that are verified
// or explicitly labelled as the author's own measurement appear here.
const experience: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Orbit Sports Data",
    period: "Oct 2021 — Present",
    location: "Remote",
    highlights: [
      "Took over a proof-of-concept MVP (a backend plus admin and reporter app shells, built to test market interest) and rebuilt it into a production platform: rewrote the backend and both apps, built the infrastructure, email system and deployments, and connected it all. It now covers 20–50 live matches on a typical day.",
      "Built third-party coverage ingestion (Extended Live): live match data from several providers, mapped into Orbit's format, de-duplicated and reconciled, with a customer-facing showcase app.",
      "Built the live event pipeline: de-duplication, reversal handling (e.g. cancelled goals) and strict event order, delivered to customers over WebSocket, RabbitMQ and REST at 70–150 ms request/response (own measurement).",
      "Built a Go scheduler and Node.js workers (Chrome DevTools Protocol) that observe a public third-party source for up to 300 matches at once into TimescaleDB and Redis, used internally for quality and divergence checks against reporter events.",
      "Extended the React reporter apps (lineups, substitutions, penalty shootouts, basketball quarters) and the Angular admin's moderator tools; built trial accounts limited by region and competition, and a customer dashboard.",
      "Added 3,000+ automated tests (208 suites), SonarQube and Semgrep scans, and replay tools that re-run recorded matches to verify fixes.",
      "Ran production infrastructure on AWS (EC2, Docker, private subnets, Security Groups, IP-allowlisted SSH, secrets in SSM). Backend deploys run reviewed database migrations, a PM2 restart and health checks.",
      "Fixed outbound email being rejected by Google Workspace with rate-limit errors: traced it in the application logs to a non-obvious mail-library setting that made the server identify itself by its IP instead of the domain.",
      "Coding with AI since 2023, from manual ChatGPT-assisted work to an agentic workflow (Claude Code, Codex): tasks are built in slices on separate branches or worktrees, cross-reviewed by a second agent, then checked with unit, integration, mutation and fuzz tests plus visual and divergence checks. I review the agents' work through documents at several levels of detail, as I would another engineer's, and read the code myself before the final review. Deploy access is unlocked only for the release and relocked; the founders sign off each feature."
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
  },
  {
    role: "Freelance",
    company: "Web development and video post-production",
    period: "2019 — 2021",
    highlights: ["Worked alongside university studies."],
    tech: []
  }
];

const Experience = () => {
  return (
    <section className="experience-section" aria-labelledby="experience-title">
      <Container>
        <header className="experience-header">
          <h2 id="experience-title" className="experience-title">Experience</h2>
          <p className="experience-subtitle">
            Sole developer of a live sports-data platform since 2021, working directly with the four founders.
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

              {job.tech.length > 0 && (
                <div className="experience-tech">
                  {job.tech.map((t) => (
                    <Badge key={t} bg="secondary" className="experience-badge">{t}</Badge>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
