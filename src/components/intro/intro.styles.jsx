import styled from "styled-components";
import { flipColor } from "./../../utils/themeUtils";
import {
  DOMINANT_COLOR,
  HEADER_COLOR,
  SUBTITLE_COLOR,
  TEXT_COLOR,
} from "../../values/colors";

/**
 * margin: top right bottom left
 * widht not specified takes the entire width of page
 */

export const IntroContainer = styled.div`
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  justify-content: space-between;

  margin-top: 60px;
`;
/**
 * flex-flow: column arranged in column order
 * gap: reduces column space in flex properties
 * specify margin 0 0 0 0  is you want no space between dics
 *
 */
export const IntroTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 500px;
`;

export const GreetingText = styled.h3`
  color: ${SUBTITLE_COLOR};
  font-size: 20px;
`;

export const JobTitleContainer = styled.div`
  color: ${TEXT_COLOR};
  display: flex;
  flex-flow: column;
  margin: 0 0 0 0;
  font-size: 25px;

  span {
    font-size: 19px;
    margin-top: 40px;
    line-height: 30px;
  }
`;

export const StudentTitle = styled.h4`
  margin: 0 0 0 0;
  color: ${({ theme }) => flipColor(theme, HEADER_COLOR, "white")};
`;

export const JobTitle = styled.h3`
  margin: 0 0 0 0;
`;
