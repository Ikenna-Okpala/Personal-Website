import styled from "styled-components";
import { DOMINANT_COLOR, HEADER_COLOR, TEXT_COLOR } from "../../values/colors";
import { flipColor } from "../../utils/themeUtils";

export const HeaderText = styled.span`
  font-size: 45px;
  font-weight: bolder;
  margin-top: -10px;
  color: ${({ theme }) => flipColor(theme, HEADER_COLOR, "white")};
`;
