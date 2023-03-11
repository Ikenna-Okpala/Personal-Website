import styled from "styled-components";
import { flipBrightness, flipColor } from "../../utils/themeUtils";
import {
  DOMINANT_COLOR,
  DOMINANT_COLOR_LIGHTER,
  HEADER_COLOR,
  TEXT_COLOR,
} from "../../values/colors";
import { BaseButton } from "../button/button.style";
import { transitionStyle } from "./../navigation/navigation.styles";

/**
 * colum-gap: separate columns
 * text-decoration: modify underlines in text
 */

export const ProjectDetailsContainer = styled.div`
  width: fit-content;
  height: fit-content;

  margin-left: 40px;

  display: flex;
  justify-content: center;
  row-gap: 30px;

  img {
    width: 300px;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const ProjectDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin-left: 100px;
  justify-content: center;
  row-gap: 20px;

  h2 {
    color: ${({ theme }) => flipColor(theme, HEADER_COLOR, "white")} !important;
    ${transitionStyle}
  }

  a {
    text-decoration: none;
  }
`;
export const ProjectSkillsContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const ProjectSkillsBubble = styled.div`
  width: fit-content;
  height: 50px;
  background-color: ${DOMINANT_COLOR};
  filter: ${({ theme }) =>
    flipBrightness(theme, "brightness(1)", "brightness(1.5)")};
  border-radius: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  ${transitionStyle}
`;

export const ProjectDescriptionText = styled.p`
  color: ${TEXT_COLOR};
  width: 600px;
  height: fit-content;
  line-height: 1.6;
  font-size: 20px;
`;

export const ProjectButton = styled(BaseButton)`
  margin: 0 0 0 0;
  svg {
    fill: white;
  }
`;
