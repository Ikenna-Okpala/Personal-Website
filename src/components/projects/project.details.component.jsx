import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import {
  ProjectButton,
  ProjectDescriptionText,
  ProjectDetailsContainer,
  ProjectDetailsTextContainer,
  ProjectSkillsBubble,
  ProjectSkillsContainer,
} from "./project.details.style";

const ProjectDetail = ({
  name,
  description,
  imageURL,
  skills,
  showcase,
  link,
}) => {
  const { theme } = useContext(ThemeContext);
  /**
   * target prop in <a></a> is set to blank for a new tab pop up
   */
  return (
    <ProjectDetailsContainer>
      <img src={imageURL} />

      <ProjectDetailsTextContainer theme={theme}>
        <h2>{name}</h2>

        <ProjectSkillsContainer>
          {skills.map((skill) => (
            <ProjectSkillsBubble theme={theme}>{skill}</ProjectSkillsBubble>
          ))}
        </ProjectSkillsContainer>

        <ProjectDescriptionText>{description}</ProjectDescriptionText>
        <a href={link} target="_blank">
          <ProjectButton theme={theme}>{showcase}</ProjectButton>
        </a>
      </ProjectDetailsTextContainer>
    </ProjectDetailsContainer>
  );
};

export default ProjectDetail;
