import { Button, Card, Badge } from "react-bootstrap"; // Import Badge for chips
import { motion } from "framer-motion";

const ProjectsCard = (props: any) => {
    return (
        <div className="project-card-wrapper" style={props.style}>
            <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="project-card" border="dark">
                    <Card.Img
                        variant="top"
                        alt={props.title}
                        src={props.src}
                        loading="lazy"
                        className="project-card-img"
                    />
                    <Card.Body className="project-card-body">
                        {/* Map props.technologies array to chips */}
                        <div className="project-technologies">
                            {props.technologies?.map((technology: string) => (
                                <Badge key={technology} pill bg="secondary" className="m-1">
                                    {technology}
                                </Badge>
                            ))}
                        </div>

                        <Card.Text className="project-card-text" style={{ fontSize: props.textSize ?? 'inherit' }}>
                            {props.text}
                        </Card.Text>

                        <Button
                            onClick={props.func}
                            href={props.href}
                            variant="dark"
                            className="project-button"
                        >
                            <div className="project-card-title">{props.title}</div>
                        </Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </div>
    );
};

export default ProjectsCard;
