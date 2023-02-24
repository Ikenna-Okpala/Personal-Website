import { TechSkillsContainer } from "./skills.style";
import {
  SkillTypeContainer,
  SkillTypeInfoContainer,
} from "./tech.skills.style";
import { ReactComponent as DropDownIcon } from "./../../assets/dropdown.svg";
import TechSkillsLine from "./tech.skills.line.component";
import { TechSkillsColumn } from "./tech.skills.style";
import { useState } from "react";
/**
 *
 * position:absolute child elements are positionsed relative to the positioned ancestor
 * styled components can have className
 */

export const INITIAL = "INITIAL";
export const ROTATE = "ROTATE";
export const REVERSE = "REVERSE";

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

const TechSkills = ({ skillTitle, skillDescription, LeftIcon, skills }) => {
  const [isDropDownVisisble, setDropDown] = useState(false);
  const [rotateIcon, setRotate] = useState(INITIAL);

  return (
    <TechSkillsContainer>
      <SkillTypeContainer
        rotate={rotateIcon}
        onClick={() => {
          setDropDown(!isDropDownVisisble);
          setRotate(getNextRotate(rotateIcon));
        }}
      >
        <LeftIcon />
        <SkillTypeInfoContainer>
          <h2>{skillTitle}</h2>

          <h3>{skillDescription}</h3>
        </SkillTypeInfoContainer>

        <DropDownIcon className="dropdown" />
      </SkillTypeContainer>
      {
        <TechSkillsColumn visible={isDropDownVisisble}>
          {Object.keys(skills).map((tech) => (
            <TechSkillsLine tech={tech} metric={skills[tech]} />
          ))}
        </TechSkillsColumn>
      }
    </TechSkillsContainer>
  );
};

export default TechSkills;
