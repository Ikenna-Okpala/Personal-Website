import { TechSkillsContainer } from "./skills.style";
import {
  SkillTypeContainer,
  SkillTypeInfoContainer,
} from "./tech.skills.style";
import { ReactComponent as DropDownIcon } from "./../../assets/dropdown.svg";
import TechSkillsLine from "./tech.skills.line.component";
import { TechSkillsColumn } from "./tech.skills.style";
import { useContext, useState } from "react";
import { INITIAL, REVERSE, ROTATE } from "./skills.component";
import { GreetingText } from "../intro/intro.styles";
import { ThemeContext } from "../../context/themeContext";
/**
 *
 * position:absolute child elements are positionsed relative to the positioned ancestor
 * styled components can have className
 */
const getNextRotate = (rotate) => {
  switch (rotate) {
    case INITIAL:
      return ROTATE;
    case ROTATE:
      return REVERSE;

    case REVERSE:
      return ROTATE;
    default:
      return ROTATE;
  }
};

const TechSkills = ({
  skillTitle,
  skillDescription,
  LeftIcon,
  skills,
  isDropDownVisible,
  setDropDown,
  rotateIcon,
  setRotate,
  setOtherDropDown,
  setOtherRotate,
  isOtherDropDown,
  otherRotate,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TechSkillsContainer>
      <SkillTypeContainer
        theme={theme}
        rotate={rotateIcon}
        onClick={() => {
          setDropDown(!isDropDownVisible);
          setOtherDropDown(false);
          if (isOtherDropDown) {
            setOtherRotate(getNextRotate(otherRotate));
          }
          setRotate(getNextRotate(rotateIcon));
        }}
      >
        <LeftIcon />
        <SkillTypeInfoContainer theme={theme}>
          <h2>{skillTitle}</h2>

          <GreetingText>{skillDescription}</GreetingText>
        </SkillTypeInfoContainer>

        <DropDownIcon className="dropdown" />
      </SkillTypeContainer>
      {
        <TechSkillsColumn visible={isDropDownVisible}>
          {Object.keys(skills).map((tech) => (
            <TechSkillsLine tech={tech} metric={skills[tech]} />
          ))}
        </TechSkillsColumn>
      }
    </TechSkillsContainer>
  );
};

export default TechSkills;
