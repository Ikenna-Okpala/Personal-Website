import styled from "styled-components";
import { ProjectContainer } from "../projects/project.styles";

/**
 * z-index specifies the stack order of elements
 */
export const SkillsContainer = styled(ProjectContainer)`
  height: auto;
  scroll-margin-top: 40px;
`;

export const SkillsRowContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  margin-top: 40px;

  justify-content: space-around;
`;

export const TechSkillsContainer = styled.div`
  width: 450px;
  height: auto;

  display: flex;
  flex-direction: column;
`;
