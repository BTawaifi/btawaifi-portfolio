import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../assets/css/impact.css";

type ImpactStat = {
  value: string;
  label: string;
  detail: string;
};

// Figures come from Orbit's public site counters, measured latency, or the test suite.
const stats: ImpactStat[] = [
  {
    value: "50K+",
    label: "Matches reported",
    detail: "Across 70+ countries, shown on Orbit's public site."
  },
  {
    value: "1,000+",
    label: "Active analysts",
    detail: "Reporters who log live match events from stadiums, TV and by phone."
  },
  {
    value: "70–150 ms",
    label: "Customer feed latency",
    detail: "Live request/response time on the customer feed endpoints."
  },
  {
    value: "3,000+",
    label: "Automated tests",
    detail: "208 suites, with replay tools that re-run recorded matches to verify fixes."
  }
];

const Impact = () => {
  return (
    <section className="impact-section" aria-labelledby="impact-title">
      <Container>
        <header className="impact-header">
          <h2 id="impact-title" className="impact-title">Impact</h2>
          <p className="impact-subtitle">
            Scale and reliability for a live sports-data platform, as verified or measured.
          </p>
        </header>

        <Row className="g-4 align-items-stretch">
          {stats.map((stat, index) => (
            <Col key={stat.label} xs={12} md={6} lg={3} className="d-flex">
              <motion.div
                className="w-100 d-flex"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              >
                <Card className="impact-card w-100 h-100">
                  <Card.Body>
                    <div className="impact-value">{stat.value}</div>
                    <div className="impact-label">{stat.label}</div>
                    <div className="impact-detail">{stat.detail}</div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Impact;
