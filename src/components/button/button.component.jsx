import { BaseButton } from "./button.style"


const Button = ({ text, Icon }) => {
    return (
        <BaseButton>
            {text}
            <Icon />
        </BaseButton>
    )

}

export default Button