import { Fragment, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

import {
  Metric,
  PercentageLine,
  SkillName,
  TechSkillsLineContainer,
  TechSkillsMetricContainer,
  TotalLine,
} from "./tech.skills.line.style";

const TechSkillsLine = ({ tech, metric }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TechSkillsLineContainer>
      <TechSkillsMetricContainer>
        <SkillName theme={theme}>{tech}</SkillName>

        <Metric>{metric + "%"}</Metric>
      </TechSkillsMetricContainer>

      <TotalLine>
        <PercentageLine theme={theme} style={{ width: metric + "%" }} />
      </TotalLine>
    </TechSkillsLineContainer>
  );
};

export default TechSkillsLine;
