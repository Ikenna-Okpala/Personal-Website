import styled from "styled-components";
import { flipBrightness } from "../../utils/themeUtils";
import { DOMINANT_COLOR } from "../../values/colors";
import { transitionStyle } from "../navigation/navigation.styles";

/**
 *
 * with: auto browser calculates the width
 * aslign-item: centralizes item vertically
 * !important overides all previous stylish rules
 * animation-diuration: determines animation time
 * tansition: determine animation speed
 * width:fit-content - auto size parent to fit child
 */

export const BaseButton = styled.button`
  height: 60px;
  font-size: 15px;
  background-color: ${DOMINANT_COLOR};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  border-radius: 30px;
  margin-top: 30px;
  width: fit-content;
  display: flex;
  transition: 0.5s;
  padding-left: 30px;
  padding-right: 30px;
  filter: ${({ theme }) =>
    flipBrightness(theme, "brightness(1)", "brightness(1.5)")};

  ${transitionStyle}

  :hover {
    transform: scale(1.1);
  }
`;
