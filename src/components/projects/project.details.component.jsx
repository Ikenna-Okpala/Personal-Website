import { ProjectButton, ProjectDescriptionText, ProjectDetailsContainer, ProjectDetailsTextContainer, ProjectSkillsBubble, ProjectSkillsContainer } from "./project.details.style"
import Button from "../button/button.component"
import { ReactComponent as ArrowForward } from "../../assets/arrow-forward.svg"


const ProjectDetail = ({ name, description, imageURL, skills, showcase }) => {

    return (
        <ProjectDetailsContainer>
            <img src={imageURL} />

            <ProjectDetailsTextContainer>
                <h2>
                    {name}
                </h2>

                <ProjectSkillsContainer>
                    {
                        skills.map(skill =>
                            <ProjectSkillsBubble>
                                {skill}

                            </ProjectSkillsBubble>
                        )
                    }



                </ProjectSkillsContainer>

                <ProjectDescriptionText>
                    {description}
                </ProjectDescriptionText>

                <ProjectButton>
                    {showcase}
                    <ArrowForward />
                </ProjectButton>
            </ProjectDetailsTextContainer>
        </ProjectDetailsContainer>
    )

}

export default ProjectDetail