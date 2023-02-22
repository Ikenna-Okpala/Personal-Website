import Button from "../button/button.component";
import { GreetingText, IntroContainer, IntroTextContainer, JobTitleContainer, NameText, StudentTitle } from "./intro.styles";
import ProfileImageFrame from "./profileImageFrame.component";
import { ReactComponent as ScrollDownIcon } from "./../../assets/scroll_down.svg"


const Intro = () => {
    return (
        <IntroContainer>
            <IntroTextContainer>
                <GreetingText>
                    HELLO
                </GreetingText>

                <NameText>
                    I'm Ikenna

                </NameText>

                <JobTitleContainer>
                    <StudentTitle>
                        Student &
                    </StudentTitle>

                    <StudentTitle>
                        Software Developer
                    </StudentTitle>
                </JobTitleContainer>
                <Button text="KNOW MORE" Icon={ScrollDownIcon} />

            </IntroTextContainer>

            <ProfileImageFrame />

        </IntroContainer>
    )
}

export default Intro;