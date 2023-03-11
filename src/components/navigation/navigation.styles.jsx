import styled, { css } from "styled-components";
import { flipColor } from "./../../utils/themeUtils";
import {
  BACKGROUND_COLOR_DARK,
  BACKGROUND_COLOR_LIGHT,
  DOMINANT_COLOR,
  DOMINANT_COLOR_DARK,
  HEADER_COLOR,
} from "../../values/colors";

/**
 * box-sizing: border-box - child fits parent dimension with with extra padding and margins included
 * box-sizing: border-box - child fits parent dimension without extra padding and margins included
 * display:flex flexible container depending on its kids
 * cannot pass boolean with styled comps
 */

export const NavigationContainer = styled.div`
  box-sizing: border-box;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const transitionStyle = css`
  transition: 0.4s;
`;

export const NameSpan = styled.span`
  font-weight: bolder;
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: ${({ theme }) => flipColor(theme, DOMINANT_COLOR, "white")};
  ${transitionStyle}
`;
/**
 * em --> relative to parent
 * rem --> relative to default font size (16)
 */

export const NavigationMenuContainer = styled.div`
  display: flex;
  height: 1em;
  justify-content: flex-start;
`;

const lightThemeStyle = css`
  background-color: ${BACKGROUND_COLOR_LIGHT};
`;
const darkThemeStyle = css`
  background-color: ${BACKGROUND_COLOR_DARK};
`;

export const SiteContainer = styled.div`
  height: 100%;
  width: 70%;
  padding-left: 15%;
  padding-right: 15%;

  padding-bottom: 50px;

  display: flex;
  flex-direction: column;

  ${({ theme }) => (theme == "dark" ? darkThemeStyle : lightThemeStyle)}

  ${transitionStyle}
`;
export const NavigationMenu = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-left: 50px;
  color: ${({ theme }) => flipColor(theme, HEADER_COLOR, "white")};
  ${transitionStyle}
  :hover {
    color: ${DOMINANT_COLOR};
    transition: 0.2s;
    cursor: pointer;
  }
`;
/**
 * position:relative relative to left right dimensions
 * position:static is relative to nothing
 * auto: can cause unwanted expansion
 * be consistent with targetting
 * pseudo elements selector for specific part of styling for an element
 */

export const NavigationColorModeIcon = styled.span`
  width: 100px;
  height: 100px;
  margin-top: -3px;
  margin-left: 50px;
  &:last-child {
    fill: ${({ theme }) => flipColor(theme, HEADER_COLOR, "white")};
    ${transitionStyle}
  }

  :hover {
    &:last-child {
      fill: ${DOMINANT_COLOR};
      transition: 0.2s;
      cursor: pointer;
    }
  }
`;
/**
 * &: unique selection
 * block level and inline lemenets
 * fill to change color of icons
 */
