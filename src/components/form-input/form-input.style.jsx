import styled, { css } from "styled-components";
import { flipColor } from "../../utils/themeUtils";
import {
  DOMINANT_COLOR,
  DOMINANT_COLOR_LIGHTER,
  FORM_COLOR_DARK,
  FORM_COLOR_LIGHT,
  LINE_COLOR_TOTAL,
  TEXT_COLOR,
} from "../../values/colors";
import { transitionStyle } from "../navigation/navigation.styles";

/**
 * focus --> when clicked input
 * outline:none no borders in input
 */

const getshrinkLabelStyles = (color) => {
  return css`
    top: 5px;
    font-size: 14px;
    color: ${color};
  `;
};

export const FormInputLabel = styled.label`
  font-size: 18px;
  left: 20px;
  top: 20px;
  position: absolute;

  transition: 300ms ease all;
  color: ${({ theme }) => flipColor(theme, TEXT_COLOR, "white")};

  ${({ theme, shrink }) =>
    shrink && getshrinkLabelStyles(flipColor(theme, TEXT_COLOR, "white"))}
`;

export const InputForm = styled.input`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) =>
    flipColor(theme, FORM_COLOR_LIGHT, FORM_COLOR_DARK)};
  ${transitionStyle}
  color: ${({ theme }) => flipColor(theme, TEXT_COLOR, "white")};
  font-size: 20px;
  border: none;
  border-radius: 10px;
  font-weight: 400;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${({ theme }) =>
      getshrinkLabelStyles(flipColor(theme, TEXT_COLOR, "white"))}
  }
  padding-left: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  column-gap: 20px;
  position: relative;
`;

export const MessageArea = styled.textarea`
  width: 100%;
  height: 400px;
  max-height: 500px;
  font-weight: 400;

  background-color: ${({ theme }) =>
    flipColor(theme, FORM_COLOR_LIGHT, FORM_COLOR_DARK)};
  ${transitionStyle}
  color: ${({ theme }) => flipColor(theme, TEXT_COLOR, "white")};
  font-size: 20px;
  border: none;
  border-radius: 10px;
  font-family: "Open Sans";

  resize: vertical;

  :focus {
    outline: none;
  }

  padding-left: 20px;
  padding-top: 50px;

  // next sibling og input box

  &:focus ~ ${FormInputLabel} {
    ${({ theme }) =>
      getshrinkLabelStyles(flipColor(theme, TEXT_COLOR, "white"))}
  }
`;
