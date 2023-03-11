import {
  Dot,
  DotContainer,
  ProjectContainer,
  ProjectSlideShowContainer,
} from "./project.styles";
import { register } from "swiper/element/bundle";
import { ReactComponent as LeftArrow } from "./../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "./../../assets/right-arrow.svg";
import ProjectDetail, { imageMap } from "./project.details.component";
import TourQuestImage from "./../../assets/tour-quest.jpg";
import StylishImage from "./../../assets/stylish.jpg";
import TheChaseImage from "./../../assets/the-chase.jpg";
import { STYLISH, THE_CHASE, TOUR_QUEST } from "../../values/project-image";
import React, { useContext, useRef, useState } from "react";
import SectionTitle from "../section-title/section-title.component";
import HeaderTitle from "../title/title.component";
import { GreetingText } from "../intro/intro.styles";
import { ThemeContext } from "../../context/themeContext";
const projects = require("../../dev-data/project-data.json");

/**
 * square brackets used to destructure an array
 * use state not good in loops
 */

register();

var slideIndex = 0;
const slideCount = 3;

const getProjectImage = (imageName) => {
  switch (imageName) {
    case TOUR_QUEST:
      return TourQuestImage;
    case STYLISH:
      return StylishImage;
    case THE_CHASE:
      return TheChaseImage;
    default:
      return null;
  }
};

const rightArrowClick = () => {
  if (slideIndex < slideCount - 1) {
    slideIndex++;
    document.querySelector("swiper-container").swiper.slideTo(slideIndex);
  }
};

const leftArrowClick = () => {
  if (slideIndex > 0) {
    slideIndex--;
    document.querySelector("swiper-container").swiper.slideTo(slideIndex);
  }
};

const onDotClick = (position) => {
  document.querySelector("swiper-container").swiper.slideTo(position);
};

const Project = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);

  const [dotColor1, setDotColor1] = useState("active");
  const [dotColor2, setDotColor2] = useState("inactive");
  const [dotColor3, setDotColor3] = useState("inactive");

  const updateDot1Color = () => {
    setDotColor2(`inactive`);
    setDotColor3(`inactive`);
    setDotColor1(`active`);
  };

  const updateDot2Color = () => {
    setDotColor1(`inactive`);
    setDotColor3(`inactive`);
    setDotColor2(`active`);
  };

  const updateDot3Color = () => {
    setDotColor3(`active`);
    setDotColor2(`inactive`);
    setDotColor1(`inactive`);
  };

  //create a ref object

  return (
    <ProjectContainer ref={ref}>
      <GreetingText>Most Recent Projects</GreetingText>

      <HeaderTitle text="Project" />

      <ProjectSlideShowContainer theme={theme}>
        <LeftArrow
          onClick={() => {
            leftArrowClick();

            switch (slideIndex) {
              case 0:
                updateDot1Color();
                break;
              case 1:
                updateDot2Color();
                break;
              case 2:
                updateDot3Color();
                break;

              default:
            }
          }}
        />
        <swiper-container
          slides-per-view="1"
          speed="300"
          loop="true"
          css-mode="true"
        >
          {projects.map((project) => {
            return (
              <swiper-slide>
                <ProjectDetail
                  name={project.name}
                  description={project.description}
                  imageURL={getProjectImage(project.image)}
                  skills={project.skills}
                  showcase={project.showcase}
                  link={project.link}
                />
              </swiper-slide>
            );
          })}
        </swiper-container>

        <RightArrow
          onClick={() => {
            rightArrowClick();

            switch (slideIndex) {
              case 0:
                updateDot1Color();
                break;
              case 1:
                updateDot2Color();
                break;
              case 2:
                updateDot3Color();
                break;
              default:
            }
          }}
        />
      </ProjectSlideShowContainer>

      <DotContainer>
        <Dot
          theme={theme}
          isActive={dotColor1}
          onClick={() => {
            onDotClick(0);
            updateDot1Color();
          }}
        />
        <Dot
          theme={theme}
          isActive={dotColor2}
          onClick={() => {
            onDotClick(1);
            updateDot2Color();
          }}
        />
        <Dot
          theme={theme}
          isActive={dotColor3}
          onClick={() => {
            onDotClick(2);
            updateDot3Color();
          }}
        />
      </DotContainer>
    </ProjectContainer>
  );
});

export default Project;
