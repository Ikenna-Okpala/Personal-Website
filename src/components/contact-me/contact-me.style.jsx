import styled from "styled-components";
import { flipColor } from "../../utils/themeUtils";
import {
  DOMINANT_COLOR,
  DOMINANT_COLOR_LIGHTER,
  HEADER_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_LIGHTER,
} from "../../values/colors";
import { transitionStyle } from "../navigation/navigation.styles";
import { ProjectContainer } from "../projects/project.styles";

/**
 * spans are better for text than h
 * text-decoration:none no underline
 * linl- normal unvisited link
 * visited- a link user has visited
 * active: the link the moment the link is clicked
 */

export const ContactMeContainer = styled(ProjectContainer)`
  height: auto;
  margin-top: -80px;
  scroll-margin-top: 40px;
`;

export const Content = styled.div`
  width: auto;
  height: fit-content;
  justify-content: space-around;
  margin-top: 90px;

  display: flex;
  column-gap: 200px;
`;

export const SideBar = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;

  row-gap: 20px;
`;

export const ContactIconLink = styled.a`
  width: fit-content;
  height: fit-content;

  display: flex;

  column-gap: 20px;

  svg {
    fill: ${({ theme }) =>
      flipColor(theme, DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER)};
    ${transitionStyle}
  }
  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
  :active {
    text-decoration: none;
  }
`;
/**
 * h2{} every h2 element that is a descenandt
 */
export const IconDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  h2 {
    margin: 0 0 0 0;
    color: ${({ theme }) => flipColor(theme, HEADER_COLOR, "white")} !important;
    ${transitionStyle}
  }

  h3 {
    margin-top: 5px;
  }

  column-gap: 15px;
  align-items: center;

  svg {
    margin-bottom: 10px;
  }
`;

export const IconTitleSpan = styled.span`
  color: ${HEADER_COLOR};
  font-size: 20px;
  font-weight: 500;
`;
export const IconSubtitleSpan = styled.span`
  color: ${TEXT_COLOR};
  font-size: 20px;
`;

export const FormContainer = styled.form`
  width: 650px;
  height: fit-content;

  display: flex;
  flex-direction: column;

  row-gap: 35px;
`;

export const FormRowDiv = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;

  column-gap: 20px;
`;
