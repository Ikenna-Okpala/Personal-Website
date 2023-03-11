import {
  AboutMeContainer,
  AboutMeDetailsContainer,
  AboutMeTextContainer,
  ProfileImageFrame,
  ProfileImageFrameContainer,
} from "./about-me.styles";
import BlurredProfileImage from "./../../assets/personal-website-image-blur.png";
import { ReactComponent as DownloadIcon } from "../../assets/download_icon.svg";
import Button from "../button/button.component";
import Resume from "./../../assets/Ikenna_Okpala_Resume.pdf";
import SectionTitle from "../section-title/section-title.component";
import { GreetingText } from "../intro/intro.styles";
import HeaderTitle from "../title/title.component";
import profileImage from "./../../assets/profileImageBackground.png";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

/**
 * target attr: specifies where to open the linked doc
 */

const AboutMe = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);

  return (
    <AboutMeContainer ref={ref}>
      <GreetingText>My Intro</GreetingText>
      <HeaderTitle text="About me" />

      <AboutMeDetailsContainer>
        <ProfileImageFrameContainer theme={theme}>
          <ProfileImageFrame src={profileImage} />
        </ProfileImageFrameContainer>

        <AboutMeTextContainer>
          <p>
            While I was 16, I started my programming journey playing with Java
            by building several small projects. My passion for abstract thinking
            and problem-solving led me to pursue a computer science degree.
            Since then, I have picked up an array of skills in front-end and
            back-end development.
          </p>

          <p>
            My interest lies is building robust back-end systems with intuitive
            API design, performant databases, and microservices architecture.
            Outside software development, I enjoy movies, soccer, and teaching.
          </p>
          <a href={Resume} download="Ikenna-Okpala-Resume" target="_blank">
            <Button text="Download Resume" Icon={DownloadIcon} />
          </a>
        </AboutMeTextContainer>
      </AboutMeDetailsContainer>
    </AboutMeContainer>
  );
});

export default AboutMe;
