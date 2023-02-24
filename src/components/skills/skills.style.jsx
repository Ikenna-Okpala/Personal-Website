import styled from "styled-components";
import { ProjectContainer } from "../projects/project.styles";

export const SkillsContainer = styled(ProjectContainer)``;

export const SkillsRowContainer = styled.div`
  width: 1000px;
  height: fit-content;

  display: flex;

  justify-content: space-between;
`;

export const TechSkillsContainer = styled.div`
  width: 450px;
  height: 600px;

  display: flex;
  flex-direction: column;
`;
