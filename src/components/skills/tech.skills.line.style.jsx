/**
 * position:relative places top and left subsequent calls relative to parent
 */

import styled from "styled-components";
import { flipColor } from "../../utils/themeUtils";
import {
  DOMINANT_COLOR,
  DOMINANT_COLOR_LIGHTER,
  HEADER_COLOR,
  LINE_COLOR_TOTAL,
  TEXT_COLOR,
} from "../../values/colors";
import { transitionStyle } from "../navigation/navigation.styles";

export const TechSkillsLineContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
`;

export const TechSkillsMetricContainer = styled.div`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  text-transform: capitalize;

  justify-content: space-between;
`;

export const TotalLine = styled.div`
  width: 400px;
  height: 8px;
  background-color: ${LINE_COLOR_TOTAL};
  position: relative;
  border-radius: 10px;
`;

export const PercentageLine = styled.div`
  height: 8px;
  background-color: ${({ theme }) =>
    flipColor(theme, DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER)};
  left: 0;
  border-radius: 3px;
  ${transitionStyle}
`;

export const SkillName = styled.h3`
  color: ${({ theme }) => flipColor(theme, HEADER_COLOR, "white")} !important;
  font-weight: 500 !important;
  ${transitionStyle}
`;

export const Metric = styled.h3`
  color: ${TEXT_COLOR} !important;
`;
