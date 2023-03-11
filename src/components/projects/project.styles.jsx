import styled from "styled-components";
import { flipColor } from "../../utils/themeUtils";
import {
  DOMINANT_COLOR,
  DOMINANT_COLOR_LIGHTER,
  TEXT_COLOR,
} from "../../values/colors";
import { transitionStyle } from "../navigation/navigation.styles";

/**
 * inline-block: padding and margins respected aand arranged in column
 * left: horizontal positioning
 */
export const ProjectContainer = styled.div`
  width: auto;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  scroll-margin-top: 40px;

  h3 {
    color: ${TEXT_COLOR};
    margin-top: -10px;
    font-weight: 400;
  }

  h1 {
    font-size: 40px;
  }
`;

export const ProjectSlideShowContainer = styled.div`
  width: 1300px;
  height: 800px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ theme }) =>
      flipColor(theme, DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER)};
    ${transitionStyle}

    :hover {
      cursor: pointer;
    }
  }
`;

export const DotContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 40px;

  display: flex;
  column-gap: 10px;
`;

const getDotColor = (theme, isActive) => {
  if (isActive === "inactive") {
    return TEXT_COLOR;
  }

  return theme === "light" ? DOMINANT_COLOR : DOMINANT_COLOR_LIGHTER;
};
export const Dot = styled.div`
  width: 15px;
  height: 15px;

  border-radius: 50%;
  background-color: ${({ theme, isActive }) => getDotColor(theme, isActive)};

  ${transitionStyle}

  :hover {
    cursor: pointer;
  }
`;
