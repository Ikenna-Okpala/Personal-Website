import styled from "styled-components";
import { flipBrightness, flipColor } from "../../utils/themeUtils";
import {
  DOMINANT_COLOR,
  DOMINANT_COLOR_LIGHTER,
  TEXT_COLOR,
} from "../../values/colors";
import { GreetingText } from "../intro/intro.styles";
/**
 * justify:y
 * align-items:x
 * paragraph has indentation by default
 * justify content determine alignment in the main axis
 * align-items sets alignment in oppositle alignment specified
 */

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  flex-flow: column;
  align-items: center;

  scroll-margin-top: 40px;

  h3 {
    color: ${TEXT_COLOR};
    margin-top: 0px;
    font-weight: 400;
  }

  h1 {
    font-size: 40px;
  }
`;

export const MyIntroText = styled(GreetingText)``;
export const AboutMeDetailsContainer = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 40px;
  display: flex;
  justify-content: flex-start;

  p {
    margin-left: 150px;
    color: ${TEXT_COLOR};
  }
`;

/**
 * border thick stroke color: set border
 */

/**
 * pseudo-elements: add an elements to a target elements  for specific content styling
  ::before first child of element
  :: after last child of the element
  images have no descendant
  auto: alternative to fit content display an elment without any overflow
*/

export const ProfileImageFrame = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  margin-top: -25px;
`;

export const ProfileImageFrameContainer = styled.div`
  width: auto;
  height: auto;
  position: relative;

  display: flex;

  &::after,
  &:before {
    position: absolute;
    width: 100px;
    height: 100px;
    content: "";
  }

  &:before {
    left: -10px;
    top: -35px;
    border-left: 3px solid
      ${({ theme }) => flipColor(theme, DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER)};
    border-top: 3px solid
      ${({ theme }) => flipColor(theme, DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER)};
  }

  &:after {
    right: -10px;
    bottom: -10px;
    border-bottom: 3px solid
      ${({ theme }) => flipColor(theme, DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER)};
    border-right: 3px solid
      ${({ theme }) => flipColor(theme, DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER)};
  }
`;

export const AboutMeTextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin-left: 100px;
  p {
    line-height: 1.6;
    font-size: 19px;
    margin-left: 0px;
  }
  a {
    margin-top: -10px;
    text-decoration: none;
  }
`;
