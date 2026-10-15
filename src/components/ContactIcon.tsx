import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

interface Props {
    href: string;
    icon: any;
}

const ContactIcon = (props: Props) => {
    return (
        <motion.div whileHover={{ scale: 1.05, transition: { yoyo: Infinity } }} className="mb-3">
            <a className="contact-text-icons" href={props.href} >
                <FontAwesomeIcon icon={props.icon} size="2x" fixedWidth />
            </a>
        </motion.div>
    )
}

export default ContactIcon
