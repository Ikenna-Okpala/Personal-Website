/**
 * position:relative places top and left subsequent calls relative to parent
 */

import styled from "styled-components";
import {
  DOMINANT_COLOR,
  DOMINANT_COLOR_LIGHTER,
  TEXT_COLOR,
} from "../../values/colors";

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
  background-color: ${DOMINANT_COLOR_LIGHTER};
  position: relative;
  border-radius: 10px;
`;

export const PercentageLine = styled.div`
  height: 8px;
  background-color: ${DOMINANT_COLOR};
  left: 0;
  border-radius: 3px;
`;

export const SkillName = styled.h3`
  color: black !important;
  font-weight: 500 !important;
`;

export const Metric = styled.h3`
  color: ${TEXT_COLOR} !important;
`;
