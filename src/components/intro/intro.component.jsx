import React, { useContext, useImperativeHandle } from "react";
import Button from "../button/button.component";
import HeaderTitle from "../title/title.component";
import {
  GreetingText,
  IntroContainer,
  IntroTextContainer,
  JobTitleContainer,
  StudentTitle,
} from "./intro.styles";
import ProfileImageFrame from "./profileImageFrame.component";
import { ThemeContext } from "../../context/themeContext";

const Intro = React.forwardRef(({ aboutRef }, ref) => {
  const { theme } = useContext(ThemeContext);

  const onButtonClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IntroContainer ref={ref}>
      <IntroTextContainer theme={theme}>
        <GreetingText>Hello, I am</GreetingText>

        <HeaderTitle text="Ikenna Okpala" />

        <JobTitleContainer>
          <StudentTitle theme={theme}>Software Developer</StudentTitle>
          <span>
            There's no greater joy than building back-end systems. I have
            experience building API systems
          </span>
        </JobTitleContainer>

        <Button text="KNOW MORE" onButtonClick={onButtonClick} />
      </IntroTextContainer>

      <ProfileImageFrame />
    </IntroContainer>
  );
});

export default Intro;
