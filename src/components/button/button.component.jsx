import { BaseButton } from "./button.style"


const Button = ({ text, Icon, onButtonClick }) => {
    return (
        <BaseButton onClick={onButtonClick}>
            {text}
            <Icon />
        </BaseButton>
    )

}

export default Button