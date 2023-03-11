import React, { Fragment, useImperativeHandle, useRef } from "react";
import AboutMe from "../about-me/about-me.component";
import { ContactMe } from "../contact-me/contact-me.component";
import Intro from "../intro/intro.component";
import Project from "../projects/project.component";
import Skills from "../skills/skills.component";
import { HomeContainer } from "./home.style";

const Home = React.forwardRef((props, ref) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  // ? is chaining

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToHome() {
          homeRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        },

        scrollToAbout() {
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        },

        scrollToProject() {
          projectRef.current?.scrollIntoView({ behavior: "smooth" });
        },

        scrollToSkills() {
          skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        },

        scrollToContact() {
          contactRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        },
      };
    },
    []
  );

  return (
    <HomeContainer>
      <Intro ref={homeRef} aboutRef={aboutRef} />
      <AboutMe ref={aboutRef} />
      <Project ref={projectRef} />
      <Skills ref={skillsRef} />
      <ContactMe ref={contactRef} />
    </HomeContainer>
  );
});

export default Home;
