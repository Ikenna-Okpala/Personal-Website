import { Dot, DotContainer, ProjectContainer, ProjectSlideShowContainer } from "./project.styles"
import { register } from "swiper/element/bundle"
import { ReactComponent as LeftArrow } from "./../../assets/left-arrow.svg"
import { ReactComponent as RightArrow } from "./../../assets/right-arrow.svg"
import ProjectDetail, { imageMap } from "./project.details.component"
import TourQuestImage from "./../../assets/tour-quest.jpg"
import StylishImage from "./../../assets/stylish.jpg"
import TheChaseImage from "./../../assets/the-chase.jpg"
import { STYLISH, THE_CHASE, TOUR_QUEST } from "../../values/project-image"
import { useRef, useState } from "react"
import { DOMINANT_COLOR, TEXT_COLOR } from "../../values/colors"
import SectionTitle from "../section-title/section-title.component"

/**
 * square brackets used to destructure an array
 * use state not good in loops
 */

register()

var slideIndex = 0
const slideCount = 3


const getProjectImage = (imageName) => {
    switch (imageName) {
        case TOUR_QUEST: return TourQuestImage
        case STYLISH: return StylishImage
        case THE_CHASE: return TheChaseImage
        default: return null
    }

}

const rightArrowClick = () => {

    if (slideIndex < slideCount - 1) {
        slideIndex++
        document.querySelector("swiper-container").swiper.slideTo(slideIndex)
    }

}

const leftArrowClick = () => {

    if (slideIndex > 0) {
        slideIndex--
        document.querySelector("swiper-container").swiper.slideTo(slideIndex)
    }

}

const onDotClick = (position) => {
    document.querySelector("swiper-container").swiper.slideTo(position)
}

const Project = () => {

    const projects = require('../../dev-data/project-data.json')

    const [dotColor1, setDotColor1] = useState(`${DOMINANT_COLOR}`)
    const [dotColor2, setDotColor2] = useState(`${TEXT_COLOR}`)
    const [dotColor3, setDotColor3] = useState(`${TEXT_COLOR}`)

    const updateDot1Color = () => {
        setDotColor2(`${TEXT_COLOR}`)
        setDotColor3(`${TEXT_COLOR}`)
        setDotColor1(`${DOMINANT_COLOR}`)
    }

    const updateDot2Color = () => {
        setDotColor1(`${TEXT_COLOR}`)
        setDotColor3(`${TEXT_COLOR}`)
        setDotColor2(`${DOMINANT_COLOR}`)
    }

    const updateDot3Color = () => {
        setDotColor3(`${DOMINANT_COLOR}`)
        setDotColor2(`${TEXT_COLOR}`)
        setDotColor1(`${TEXT_COLOR}`)
    }

    //create a ref object

    return (
        <ProjectContainer>
            <SectionTitle title="Project" subtitle="Most recent work" />

            <ProjectSlideShowContainer>
                <LeftArrow onClick={
                    () => {

                        leftArrowClick()

                        switch (slideIndex) {
                            case 0:
                                updateDot1Color()
                                break
                            case 1:
                                updateDot2Color()
                                break
                            case 2:
                                updateDot3Color()
                                break

                            default:

                        }

                    }
                } />
                <swiper-container slides-per-view="1" speed="300" loop="true" css-mode="true">

                    {
                        projects.map(project => {
                            return (
                                <swiper-slide>
                                    <ProjectDetail name={project.name} description={project.description}
                                        imageURL={getProjectImage(project.image)} skills={project.skills} showcase={project.showcase}
                                    />
                                </swiper-slide>
                            )
                        }
                        )

                    }

                </swiper-container>


                <RightArrow onClick={
                    () => {
                        rightArrowClick()

                        switch (slideIndex) {
                            case 0:
                                updateDot1Color()
                                break
                            case 1:
                                updateDot2Color()
                                break
                            case 2:
                                updateDot3Color()
                                break
                            default:

                        }
                    }
                } />


            </ProjectSlideShowContainer>

            <DotContainer>

                <Dot style={{ backgroundColor: dotColor1 }} onClick={() => {
                    onDotClick(0)
                    updateDot1Color()
                }} />
                <Dot style={{ backgroundColor: dotColor2 }} onClick={() => {
                    onDotClick(1)
                    updateDot2Color()
                }} />
                <Dot style={{ backgroundColor: dotColor3 }} onClick={() => {
                    onDotClick(2)
                    updateDot3Color()
                }} />

            </DotContainer>
        </ProjectContainer>
    )
}

export default Project