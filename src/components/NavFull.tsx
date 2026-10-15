import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/img/Logo.png";
import Logolgt from "../assets/img/Logo-lgt.png";
import "../assets/css/nav.css";

interface Props {
  RefList?: any;
  logoText: string;
  navBackground: any;
  hasLinks: boolean;
}

const LINKS = ["About", "Impact", "Experience", "Projects", "Contact"];

export const NavFull = (props: Props) => {
  const [active, setActive] = useState(1);

  // Smooth scroll to section; the section anchors carry scroll-margin-top so the fixed bar does not cover them.
  const scrollToSection = (sectionIndex: number) => {
    setActive(sectionIndex);
    props.RefList?.[sectionIndex - 1]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // The active link is the last section whose anchor has passed 35% of the viewport; the page bottom selects the last one.
  useEffect(() => {
    if (!props.hasLinks || !props.RefList) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = 1;
      props.RefList.forEach((ref: any, index: number) => {
        const el = ref?.current;
        if (el && el.getBoundingClientRect().top <= line) current = index + 1;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = props.RefList.length;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [props.hasLinks, props.RefList]);

  return (
    <div style={{padding:'0 1em'}}>
      <Navbar className={props.navBackground}
        expand="sm"
        collapseOnSelect
        bg={props.navBackground}
        variant={props.navBackground}
        fixed="top"
        style={{ width: props.hasLinks ? "auto" : "fit-content" }}
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={props.logoText ? Logolgt : Logo}
            width="36"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="logoText">{" " + props.logoText}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {props.hasLinks && <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
          style={{gap: '0.5em'}}
        >
          {LINKS.map((label, i) => (
            <Nav.Link
              key={label}
              eventKey={String(i + 1)}
              active={active === i + 1}
              aria-current={active === i + 1 ? "true" : undefined}
              onClick={() => scrollToSection(i + 1)}
            >
              {label}
            </Nav.Link>
          ))}
        </Navbar.Collapse>
        }
      </Navbar>
    </div>
  );
};
