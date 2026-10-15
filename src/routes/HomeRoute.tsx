//import 'bootstrap/dist/css/bootstrap.min.css';
import React,{lazy,useRef} from "react";
import "intersection-observer";
import GeneralContainer from "../components/GeneralContainer";
import About from "../components/About";
import { NavFull } from "../components/NavFull";
import SkipLink from "../components/SkipLink";

import { motion } from "framer-motion";

const Impact = lazy(() => import("../components/Impact"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Certifications = lazy(() => import("../components/Certifications"));
const Projects = lazy(() => import("../components/Projects"));
const ContactFooter = lazy(() => import("../components/ContactFooter"));

const HomeRoute = () => {
    const myRef1 = useRef<HTMLDivElement>(null);
    const myRef2 = useRef<HTMLDivElement>(null);
    const myRef3 = useRef<HTMLDivElement>(null);
    const myRef4 = useRef<HTMLDivElement>(null);
    const myRef5 = useRef<HTMLDivElement>(null);
    const RefList = [myRef1, myRef2, myRef3, myRef4, myRef5];
  
    return (
            <>
                <SkipLink />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                <NavFull
                    RefList={RefList}
                    logoText=""
                    navBackground="light"
                    hasLinks={true}
                />
                <div id="about" className="position-absolute section-anchor" ref={RefList[0]}></div>
                <GeneralContainer containerClass="Dark_Bg bg-height-mod-about">
                    <header>
                        <About />
                    </header>
                </GeneralContainer>

                <main id="main-content">
                    <div id="impact" className="position-absolute section-anchor" ref={RefList[1]}></div>
                    <GeneralContainer containerClass="Light_Bg">
                            <article>
                                <Impact />
                                <Skills />
                            </article>
                    </GeneralContainer>

                    <div id="experience" className="position-absolute section-anchor" ref={RefList[2]}></div>
                    <GeneralContainer containerClass="Dark_Bg">
                            <article>
                                <Experience />
                                <Certifications />
                            </article>
                    </GeneralContainer>

                    <div id="projects" className="position-absolute section-anchor" ref={RefList[3]}></div>
                    <GeneralContainer containerClass="Light_Bg">
                            <article>
                                <Projects />
                            </article>
                    </GeneralContainer>
                </main>

                <div id="contact" className="position-absolute section-anchor" ref={RefList[4]}></div>
                <GeneralContainer containerClass="Dark_Bg">
                        <footer>
                            <ContactFooter />
                        </footer>
                </GeneralContainer>
                </motion.div>
            </>
    )
}

export default HomeRoute
