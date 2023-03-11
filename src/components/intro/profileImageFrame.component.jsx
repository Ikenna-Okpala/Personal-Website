import { ProfileImage, ProfileImageContainer } from "./profileImage.styles";
import profileImage from "./../../assets/profileImage.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { DOMINANT_COLOR, DOMINANT_COLOR_LIGHTER } from "../../values/colors";

/**
 *
 * this is how you pass png images to image componenet
 */

const ProfileImageFrame = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ProfileImageContainer theme={theme}>
      <svg
        viewBox="0 0 480 480"
        width="100%"
        height="100%"
        transform="scale(1.5)"
      >
        <path
          fill={theme === "light" ? DOMINANT_COLOR : DOMINANT_COLOR_LIGHTER}
          d="M423.5,315Q390,390,315,421.5Q240,453,175.5,411Q111,369,60,304.5Q9,240,53.5,169Q98,98,169,83Q240,68,317.5,76.5Q395,85,426,162.5Q457,240,423.5,315Z"
        />

        <image
          href={profileImage}
          x={110}
          y={90}
          width={"300px"}
          height={"300px"}
        />
      </svg>
    </ProfileImageContainer>
  );
};

export default ProfileImageFrame;
