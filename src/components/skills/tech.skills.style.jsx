import styled from "styled-components";
import { flipColor } from "../../utils/themeUtils";
import {
  DOMINANT_COLOR,
  DOMINANT_COLOR_LIGHTER,
  HEADER_COLOR,
  SUBTITLE_COLOR,
} from "../../values/colors";
import { transitionStyle } from "../navigation/navigation.styles";

/**
 * overflow:hidden child dimension cannot surpass parent dimension
 * transform:rotate -> rotate animation
 * trnasition-duration -> time of animation
 */
import { ReactComponent as DropDownIcon } from "./../../assets/dropdown.svg";
import { INITIAL, REVERSE, ROTATE } from "./skills.component";

const getRotateStyling = (rotate) => {
  switch (rotate) {
    case INITIAL:
      return ``;

    case ROTATE:
      return `
        transform:rotate(180deg);
        transition-duration:0.6s;
      `;

    case REVERSE:
      return `
      transform:rotate(0deg);
      transition-duration:0.6s;
    `;

    default:
      return ``;
  }
};

export const SkillTypeContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;

  svg {
    fill: ${({ theme }) =>
      flipColor(theme, DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER)};
    ${transitionStyle}
    margin-top: 15px;
  }
  :hover {
    cursor: pointer;
  }

  & .dropdown {
    ${({ rotate }) => getRotateStyling(rotate)}
  }

  transition: height 0.3s ease;
`;

export const SkillTypeInfoContainer = styled.div`
  width: fit-content;
  height: auto;

  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 100px;

  h3 {
    margin-top: -8px;
  }

  h2 {
    color: ${({ theme }) => flipColor(theme, HEADER_COLOR, "white")} !important;
    ${transitionStyle}
  }
`;

export const TechSkillsColumn = styled.div`
  width: fit-content;
  max-height: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  overflow: hidden;
  row-gap: 15px;

  ${({ visible }) =>
    visible &&
    `
    max-height: 400px;
  `}

  transition: max-height 0.3s ease;
`;
