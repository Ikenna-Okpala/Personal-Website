import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { FormInputLabel, InputForm, InputContainer } from "./form-input.style";

/**
 *
 * @param {input should not have any children} param0
 * @returns
 */
const FormInput = ({ label, ...otherProps }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <InputContainer>
      <InputForm theme={theme} {...otherProps} />

      <FormInputLabel theme={theme} shrink={otherProps.value.length}>
        {label}
      </FormInputLabel>
    </InputContainer>
  );
};

export default FormInput;
