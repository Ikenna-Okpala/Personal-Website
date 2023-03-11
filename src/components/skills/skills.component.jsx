import { SkillsContainer, SkillsRowContainer } from "./skills.style";
import SectionTitle from "../section-title/section-title.component";
import TechSkills from "./tech.skills.component";
import { ReactComponent as FrontEndIcon } from "./../../assets/frontend.svg";
import { ReactComponent as BackEndIcon } from "./../../assets/backend.svg";
import React, { useState } from "react";
import { GreetingText } from "../intro/intro.styles";
import HeaderTitle from "../title/title.component";

export const INITIAL = "INITIAL";
export const ROTATE = "ROTATE";
export const REVERSE = "REVERSE";

const Skills = React.forwardRef((props, ref) => {
  const skills = {
    frontend: {
      JavaScript: 80,
      React: 85,
      HTML: 75,
      CSS: 70,
    },
    backend: {
      MySQL: 90,
      Java: 90,
      "Node.js": 85,
      MongoDB: 80,
    },
  };

  const [isDropDownVisibleFrontEnd, setDropDownFrontEnd] = useState(false);
  const [rotateIconFrontEnd, setRotateFrontEnd] = useState(INITIAL);

  const [isDropDownVisibleBackEnd, setDropDownBackEnd] = useState(false);
  const [rotateIconBackEnd, setRotateBackEnd] = useState(INITIAL);

  return (
    <SkillsContainer ref={ref}>
      <GreetingText>My Technical Experience</GreetingText>
      <HeaderTitle text="Skills" />
      <SkillsRowContainer>
        <TechSkills
          skillTitle={"Frontend Skills"}
          skillDescription={"More than 3 projects"}
          LeftIcon={FrontEndIcon}
          skills={skills.frontend}
          isDropDownVisible={isDropDownVisibleFrontEnd}
          setDropDown={setDropDownFrontEnd}
          rotateIcon={rotateIconFrontEnd}
          setRotate={setRotateFrontEnd}
          setOtherDropDown={setDropDownBackEnd}
          setOtherRotate={setRotateBackEnd}
          isOtherDropDown={isDropDownVisibleBackEnd}
          otherRotate={rotateIconBackEnd}
        />

        <TechSkills
          skillTitle={"Backend Skills"}
          skillDescription={"More than 5 projects"}
          LeftIcon={BackEndIcon}
          skills={skills.backend}
          isDropDownVisible={isDropDownVisibleBackEnd}
          setDropDown={setDropDownBackEnd}
          rotateIcon={rotateIconBackEnd}
          setRotate={setRotateBackEnd}
          setOtherDropDown={setDropDownFrontEnd}
          setOtherRotate={setRotateFrontEnd}
          isOtherDropDown={isDropDownVisibleFrontEnd}
          otherRotate={rotateIconFrontEnd}
        />
      </SkillsRowContainer>
    </SkillsContainer>
  );
});

export default Skills;
