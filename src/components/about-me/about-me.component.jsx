import { AboutMeContainer, AboutMeDetailsContainer, ProfileImageBlurred } from "./about-me.styles"
import BlurredProfileImage from "./../../assets/personal-website-image-blur.png"


const AboutMe = () => {
    return (
        <AboutMeContainer>
            <h1>
                About Me
            </h1>

            <AboutMeDetailsContainer>
                <ProfileImageBlurred src={BlurredProfileImage} />

                <h3>
                    I started my programming journey when I was 16 playing with Java by building several small projects.
                    My passion for abstract thinking and problem-solving led me to pursue a computer science degree.
                    Ever since, I have picked up skills in front-end technologies such as React and back-end technologies like Node.js,
                    MySQL, and MongoDB.

                    Yes

                </h3>
            </AboutMeDetailsContainer>
        </AboutMeContainer>
    )
}

export default AboutMe