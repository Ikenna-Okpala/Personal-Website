import { TitleContainer } from "./section-title.style"


const SectionTitle = ({ title, subtitle }) => {
    return (
        <TitleContainer>
            <h1>
                {title}
            </h1>
            <h3>
                {subtitle}
            </h3>
        </TitleContainer>
    )
}

export default SectionTitle