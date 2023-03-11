import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { BaseButton } from "./button.style";

const Button = ({ text, onButtonClick, ...otherProps }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <BaseButton theme={theme} onClick={onButtonClick} {...otherProps}>
      {text}
    </BaseButton>
  );
};

export default Button;
