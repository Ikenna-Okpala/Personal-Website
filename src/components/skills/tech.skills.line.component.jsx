import { Fragment } from "react";

import {
  Metric,
  PercentageLine,
  SkillName,
  TechSkillsLineContainer,
  TechSkillsMetricContainer,
  TotalLine,
} from "./tech.skills.line.style";

const TechSkillsLine = ({ tech, metric }) => {
  return (
    <TechSkillsLineContainer>
      <TechSkillsMetricContainer>
        <SkillName>{tech}</SkillName>

        <Metric>{metric + "%"}</Metric>
      </TechSkillsMetricContainer>

      <TotalLine>
        <PercentageLine style={{ width: metric + "%" }} />
      </TotalLine>
    </TechSkillsLineContainer>
  );
};

export default TechSkillsLine;
