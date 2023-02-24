import { AboutMeContainer, AboutMeDetailsContainer, AboutMeTextContainer, ProfileImageBlurred } from "./about-me.styles"
import BlurredProfileImage from "./../../assets/personal-website-image-blur.png"
import { ReactComponent as DownloadIcon } from "../../assets/download_icon.svg"
import Button from "../button/button.component"
import Resume from "./../../assets/Ikenna_Okpala_Resume.pdf"
import SectionTitle from "../section-title/section-title.component"

/**
 * target attr: specifies where to open the linked doc
 */

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <SectionTitle title="About Me" subtitle="A brief introduction" />

            <AboutMeDetailsContainer>
                <ProfileImageBlurred src={BlurredProfileImage} />

                <AboutMeTextContainer>
                    <p>
                        I started my programming journey when I was 16 playing with Java by building several small projects.
                        My passion for abstract thinking and problem-solving led me to pursue a computer science degree.
                        Ever since, I have picked up skills in front-end technologies such as React and back-end technologies like Node.js,
                        MySQL, and MongoDB.

                    </p>

                    <p>

                        If I am not on my computer, you can find me teaching technologies or playing soccer.

                    </p>
                    <a href={Resume} download="Ikenna-Okpala-Resume" target="_blank">
                        <Button text="Download Resume" Icon={DownloadIcon} />


                    </a>


                </AboutMeTextContainer>



            </AboutMeDetailsContainer>
        </AboutMeContainer>
    )
}

export default AboutMe