import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "../assets/css/projects.css";
import "../assets/css/impact.css";

import couponHome from "../assets/img/portfolio/coupon-customer-home.jpg";
import elearningLanding from "../assets/img/portfolio/elearning-landing.jpg";
import propertyLanding from "../assets/img/portfolio/property-landing.jpg";
import strategyShot from "../assets/img/portfolio/strategy-asylum.jpg";
import uaefmaHome from "../assets/img/portfolio/uaefma-home.jpg";
import festivalListing from "../assets/img/portfolio/festival-listing.jpg";
import rtsBanner from "../assets/img/portfolio/rts-banner.jpg";
import moderationArchitecture from "../assets/img/portfolio/moderation-architecture.svg";
import sequencerShot from "../assets/img/portfolio/cinematic-sequencer.jpg";
import paneInkShot from "../assets/img/portfolio/paneink-demo.jpg";
import petrossonSite from "../assets/img/portfolio/petrosson-site.jpg";
import tcorpEms from "../assets/img/portfolio/tcorp-ems.jpg";
import lastTemptation from "../assets/img/portfolio/last-temptation.jpg";
import connect4 from "../assets/img/portfolio/connect4.jpg";
import designGallery from "../assets/img/portfolio/design-gallery.jpg";
import manualModeration from "../assets/img/portfolio/manual-moderation-architecture.svg";
import trelloTodo from "../assets/img/portfolio/trello-todo-architecture.svg";
import mcpArchitecture from "../assets/img/portfolio/mcp-bridge-architecture.svg";
import audioArchitecture from "../assets/img/portfolio/audio-desilencer-architecture.svg";
import markdownArchitecture from "../assets/img/portfolio/markdown-editor-architecture.svg";

type Link = { label: string; href: string };

type Project = {
  title: string;
  kind: string;
  summary: string;
  tech: string[];
  image: { src: string; alt: string; fit: "cover" | "contain" };
  links: Link[];
};

type Group = { heading: string; projects: Project[] };

// Client work is described without client names. Screenshots show mock data or are cropped.
// Each card shows one image, so every card has the same structure and height.
const groups: Group[] = [
  {
    heading: "Products and AI tooling",
    projects: [
      {
        title: "Codebase MCP Bridge",
        kind: "Open source · built with AI agents",
        summary:
          "A Model Context Protocol server that gives AI coding tools controlled access to a repository: batched search and read, patches with rollback, Git, and allowlisted validation over stdio or OAuth-protected HTTP. Tested in CI on Node 22 and 24.",
        tech: ["TypeScript", "MCP", "Node.js", "OAuth"],
        image: { src: mcpArchitecture, alt: "Architecture diagram of the Codebase MCP Bridge", fit: "contain" },
        links: [{ label: "Source", href: "https://github.com/BTawaifi/codebase-mcp-bridge" }]
      },
      {
        title: "Strategy Asylum",
        kind: "Live product · built with AI agents",
        summary:
          "A Next.js and PostgreSQL web app: an AI co-pilot that guides business-strategy frameworks such as SWOT and PESTLE and generates strategy documents.",
        tech: ["Next.js", "PostgreSQL", "LLM APIs"],
        image: { src: strategyShot, alt: "Strategy Asylum landing page with an interface preview", fit: "cover" },
        links: [{ label: "Live site", href: "https://strategy.tasawom.com/" }]
      },
      {
        title: "Cinematic Sequencer",
        kind: "Unpublished app · built with AI agents",
        summary:
          "An AI storyboard and video-production tool: plan a story, turn it into shots, generate start and end frames and video with Gemini, then cut and deliver. Projects are stored in PostgreSQL. Screenshot shows sample data.",
        tech: ["React", "Vite", "Express", "PostgreSQL", "Gemini API"],
        image: { src: sequencerShot, alt: "Cinematic Sequencer storyboard with three sample shots", fit: "cover" },
        links: []
      },
      {
        title: "PaneInk",
        kind: "Desktop app · downloadable",
        summary:
          "A lightweight annotation overlay for Windows, Linux and macOS, with an Android overlay build: pen, highlighter, arrows, text, opaque redaction blocks and region snapshots copied to the clipboard.",
        tech: [".NET", "Windows", "Linux", "macOS", "Android"],
        image: { src: paneInkShot, alt: "PaneInk annotating a slide with an ellipse, an arrow and a redaction block", fit: "cover" },
        links: [{ label: "Downloads", href: "https://github.com/BTawaifi/PaneInk-Releases" }]
      }
    ]
  },
  {
    heading: "Client work",
    projects: [
      {
        title: "Coupon and membership marketplace",
        kind: "Client work",
        summary:
          "Sole front-end developer of a bilingual (Arabic/English) customer web app and admin panel with subscriptions, QR coupon redemption and role-based permissions, working with back-end engineers and business stakeholders on API contracts and design specs. Mock data.",
        tech: ["React", "Redux Toolkit", "Material UI"],
        image: { src: couponHome, alt: "Customer home page of a coupon marketplace, with mock data", fit: "cover" },
        links: []
      },
      {
        title: "Property-evaluation SaaS",
        kind: "Client work",
        summary:
          "Paymob payments (checkout, refunds, payment status) and company subscription and evaluation features, built in a small front-end team with a lead developer coordinating the work and reviewing code.",
        tech: ["React", "Paymob", "Front-end team"],
        image: { src: propertyLanding, alt: "Public landing page of a property-evaluation platform, with mock data", fit: "cover" },
        links: []
      },
      {
        title: "E-learning platform",
        kind: "Client work",
        summary:
          "React front end for a schools expansion: admin, principal, teacher and student roles with reworked permissions, plus payment and subscription screens.",
        tech: ["React", "Role-based permissions"],
        image: { src: elearningLanding, alt: "Public landing page of an e-learning platform", fit: "cover" },
        links: []
      },
      {
        title: "PetrossonBYGG website",
        kind: "Client work · live site",
        summary:
          "A React and Redux website for a home installation and decoration company in Upplands Väsby, Stockholm, in Swedish, built to bring in enquiries through a contact form.",
        tech: ["React", "Redux", "Bootstrap"],
        image: { src: petrossonSite, alt: "Home page of the PetrossonBYGG website with a kitchen installation photo", fit: "cover" },
        links: [{ label: "Live site", href: "https://petrossonbygg.github.io/" }]
      },
      {
        title: "Festival and media website",
        kind: "WordPress · rebuilt February 2025",
        summary: "A custom interactive media map built on Leaflet, for a Syrian arts organisation's website.",
        tech: ["WordPress", "Leaflet"],
        image: { src: festivalListing, alt: "Festivals listing with event posters", fit: "contain" },
        links: [{ label: "Live site", href: "https://festival-aleppo.org/" }]
      },
      {
        title: "Association website",
        kind: "WordPress · child theme",
        summary: "WordPress and Flatsome build with a custom child theme for a UAE financial markets association.",
        tech: ["WordPress", "Flatsome"],
        image: { src: uaefmaHome, alt: "Awards banner on a financial markets association website", fit: "cover" },
        links: [{ label: "Live site", href: "https://www.uaefma.com/" }]
      }
    ]
  },
  {
    heading: "Open source and research",
    projects: [
      {
        title: "Image moderation (university project)",
        kind: "Research project · 2023",
        summary:
          "NestJS microservices (gateway, auth, upload, storage) over RabbitMQ, with Python CLIP workers on FastAPI that classify images.",
        tech: ["NestJS", "RabbitMQ", "FastAPI", "CLIP"],
        image: { src: moderationArchitecture, alt: "Architecture diagram of the image moderation system: gateway, auth, upload and storage services, RabbitMQ and a CLIP worker", fit: "contain" },
        links: [
          {
            label: "Source",
            href: "https://github.com/BTawaifi/Affordable-Image-Moderation-CLIP-Model-with-FastAPI-Framework"
          }
        ]
      },
      {
        title: "Manual image moderation system",
        kind: "Open source · full-stack app",
        summary:
          "An application for moderating incoming image reports and sending each result to the reporting system through a callback URL. React moderator app, Express and TypeORM back end on MySQL, an automated pre-filter step, and a rollback if the callback is not received.",
        tech: ["React", "TypeScript", "Express", "TypeORM", "MySQL", "Docker"],
        image: { src: manualModeration, alt: "Architecture diagram of the manual image moderation system", fit: "contain" },
        links: [{ label: "Source", href: "https://github.com/BTawaifi/image_moderation_system" }]
      },
      {
        title: "Trello Todo List",
        kind: "Open source · full-stack app",
        summary:
          "A full-stack app for custom communication with Trello's REST API: a React client, an Express server that holds the credentials, and an optional Redis cache.",
        tech: ["TypeScript", "React", "Express", "Redis"],
        image: { src: trelloTodo, alt: "Architecture diagram of the Trello Todo List app", fit: "contain" },
        links: [{ label: "Source", href: "https://github.com/BTawaifi/trello-todo-app" }]
      },
      {
        title: "Audio DeSilencer",
        kind: "Open source · Python package",
        summary:
          "A Python package and CLI that shortens long silent pauses without re-processing the audio that is kept. Installable with pip.",
        tech: ["Python", "FFmpeg"],
        image: { src: audioArchitecture, alt: "Pipeline diagram of Audio DeSilencer", fit: "contain" },
        links: [{ label: "Source", href: "https://github.com/BTawaifi/Audio-DeSilencer" }]
      },
      {
        title: "Hybrid Markdown Editor",
        kind: "Open source · React component",
        summary:
          "A reusable React markdown editor that renders inactive lines and turns the focused line into an inline editor, built as a controlled component with an extensions API.",
        tech: ["React", "TypeScript"],
        image: { src: markdownArchitecture, alt: "Architecture diagram of the Hybrid Markdown Editor", fit: "contain" },
        links: [{ label: "Source", href: "https://github.com/BTawaifi/hybrid-markdown-editor" }]
      },
      {
        title: "FreeSpace RTS: Fleet Command",
        kind: "Game mod · released",
        summary:
          "A released strategy mod for FreeSpace 2: 22K lines of Lua across 108 modules, with computer-player AI and Python (pytest) test tools.",
        tech: ["Lua", "Python"],
        image: { src: rtsBanner, alt: "FreeSpace RTS: Fleet Command banner", fit: "cover" },
        links: [{ label: "Source", href: "https://github.com/BTawaifi/RTS-fleet-command" }]
      }
    ]
  },
  {
    heading: "Design, video and hardware",
    projects: [
      {
        title: "Design gallery",
        kind: "Personal · 3D and graphic design",
        summary:
          "3D models and renders made in Maya and ZBrush and finished in Photoshop, plus logo and brand work in Illustrator.",
        tech: ["Maya", "ZBrush", "Photoshop", "Illustrator"],
        image: { src: designGallery, alt: "Four pieces: a dragon head model, a fighter jet render, a medieval workbench render and a space poster", fit: "cover" },
        links: []
      },
      {
        title: "The Last Temptation",
        kind: "Video · post-production",
        summary:
          "A film produced by Issa Touma about a shattered piano among the ruins of Aleppo. Video editing and graphics for the film.",
        tech: ["Premiere", "Photoshop"],
        image: { src: lastTemptation, alt: "Still from The Last Temptation: a grand piano among ruins", fit: "cover" },
        links: [{ label: "Watch", href: "https://www.youtube.com/watch?v=xc7HufHJC10" }]
      },
      {
        title: "TCorp.EMS",
        kind: "Personal · UX/UI design",
        summary:
          "Design of an employee-management system in Figma: login, a department dashboard with tasks, and employee lists.",
        tech: ["Figma"],
        image: { src: tcorpEms, alt: "Dashboard design of an employee management system", fit: "cover" },
        links: [{ label: "Design PDF", href: "https://drive.google.com/file/d/1K-k3gOtcFkoT4h3fBcaILU17NRF2uOcY/view" }]
      },
      {
        title: "Connect 4",
        kind: "University · hardware",
        summary:
          "An electronic version of Connect 4 on an Arduino Uno (ATmega328), simulated in Proteus: players pick a colour and move with buttons, and an RGB LED matrix shows the coins dropping. Computer Engineering project, built with two classmates.",
        tech: ["Arduino", "Proteus", "Embedded"],
        image: { src: connect4, alt: "Flow chart of the Connect 4 project: input buttons, input handling, controller, output handling, RGB LED matrix", fit: "contain" },
        links: [{ label: "Slides", href: "https://docs.google.com/presentation/d/e/2PACX-1vQv4wZtWALo0uGILweo8X_tTDX72SEyJQ_511VSY7nE5vGtuMY5munTtOnDgr2CHg/pub?start=false&loop=false&delayms=5000" }]
      }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section impact-section" aria-labelledby="projects-title">
      <Container>
        <header className="impact-header">
          <h2 id="projects-title" className="impact-title">Selected projects</h2>
          <p className="impact-subtitle">
            Client work is shown without client names. Screenshots use mock data or are cropped.
          </p>
        </header>

        {groups.map((group) => (
          <div key={group.heading} style={{ marginBottom: 56 }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 20, color: "#1b2430", borderBottom: "2px solid #d5dae1", paddingBottom: 8 }}>
              {group.heading}
            </h3>
            <Row className="g-4 justify-content-center">
              {group.projects.map((p, index) => (
                <Col key={p.title} xs={12} md={6} className="d-flex">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.35, delay: (index % 2) * 0.05 }}
                    className="w-100 d-flex"
                  >
                    <Card className="w-100 h-100 border-0 shadow-sm" style={{ overflow: "hidden" }}>
                      <div
                        style={{
                          height: "clamp(170px, 48vw, 220px)",
                          background: p.image.fit === "contain" ? "#ffffff" : "#f1f3f6",
                          borderBottom: "1px solid #e5e7eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden"
                        }}
                      >
                        <img
                          src={p.image.src}
                          alt={p.image.alt}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: p.image.fit,
                            objectPosition: "top center",
                            display: "block"
                          }}
                        />
                      </div>

                      <Card.Body className="d-flex flex-column" style={{ padding: "24px 24px 20px" }}>
                        <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#5b6675", marginBottom: 6 }}>
                          {p.kind}
                        </div>
                        <Card.Title style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 10 }}>{p.title}</Card.Title>
                        <Card.Text style={{ color: "#3b4452", lineHeight: 1.6, marginBottom: 16 }}>{p.summary}</Card.Text>

                        <div style={{ marginBottom: 16 }}>
                          {p.tech.map((t) => (
                            <Badge key={t} bg="secondary" style={{ marginRight: 6, marginBottom: 6, fontWeight: 500 }}>
                              {t}
                            </Badge>
                          ))}
                        </div>

                        {p.links.length > 0 && (
                          <div className="mt-auto d-flex flex-wrap" style={{ gap: 8 }}>
                            {p.links.map((l) => (
                              <Button key={l.href} variant="outline-primary" size="sm" href={l.href} target="_blank" rel="noreferrer">
                                {l.label}
                              </Button>
                            ))}
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
