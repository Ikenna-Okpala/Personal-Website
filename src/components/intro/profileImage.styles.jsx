import styled from "styled-components";
import { flipBrightness } from "../../utils/themeUtils";
import { DOMINANT_COLOR } from "../../values/colors";

/**
 * with flex, you have to specify the wif=dth
 * object-fit: fit an image into its container maintaining aspect ration or clipping
 * specify width and height for img dimension before calling object fit
 */

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100px;
`;

export const ProfileImageContainer = styled.div`
  width: 400px;
  height: 400px;

  display: flex;
  margin-right: 100px;

  svg {
    transition: 0.4s;
  }
`;
