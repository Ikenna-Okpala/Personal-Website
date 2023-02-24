import { SkillsContainer, SkillsRowContainer } from "./skills.style";
import SectionTitle from "../section-title/section-title.component";
import TechSkills from "./tech.skills.component";
import { ReactComponent as FrontEndIcon } from "./../../assets/frontend.svg";
import { ReactComponent as BackEndIcon } from "./../../assets/backend.svg";

const Skills = () => {
  const skills = {
    frontend: {
      JavaScript: 80,
      React: 85,
      HTML: 75,
      CSS: 70,
    },
    backend: {
      MySQL: 90,
      Java: 90,
      "Node.js": 85,
      MongoDB: 80,
    },
  };

  return (
    <SkillsContainer>
      <SectionTitle title="Skills" subtitle="My technical experience" />
      <SkillsRowContainer>
        <TechSkills
          skillTitle={"Frontend Skills"}
          skillDescription={"More than 3 projects"}
          LeftIcon={FrontEndIcon}
          skills={skills.frontend}
        />

        <TechSkills
          skillTitle={"Backend Skills"}
          skillDescription={"More than 5 projects"}
          LeftIcon={BackEndIcon}
          skills={skills.backend}
        />
      </SkillsRowContainer>
    </SkillsContainer>
  );
};

export default Skills;
