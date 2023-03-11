import styled from "styled-components";
import { HEADER_COLOR } from "../../values/colors";

/**
 * margin-left:auto remaining space not taken by width
 *
 */
export const HomeContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 200px;
  scroll-margin-top: 40px;

  h2 {
    color: ${HEADER_COLOR};
  }
`;
