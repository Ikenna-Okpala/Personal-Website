import styled from "styled-components";
import { DOMINANT_COLOR } from "../../values/colors";

/**
 * overflow:hidden child dimension cannot surpass parent dimension
 * transform:rotate -> rotate animation
 * trnasition-duration -> time of animation
 */
import { ReactComponent as DropDownIcon } from "./../../assets/dropdown.svg";
import { INITIAL, REVERSE, ROTATE } from "./tech.skills.component";

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
  height: 100px;

  display: flex;
  align-items: center;

  svg {
    fill: ${DOMINANT_COLOR};
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
  height: 100%;

  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 100px;
`;

export const TechSkillsColumn = styled.div`
  width: fit-content;
  height: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  overflow: hidden;
  row-gap: 15px;

  ${({ visible }) =>
    visible &&
    `
    height: 400px;
  `}

  transition: height 0.3s ease;
`;
