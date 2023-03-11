import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { HeaderText } from "./title.style";

const HeaderTitle = ({ text }) => {
  const { theme } = useContext(ThemeContext);

  return <HeaderText theme={theme}>{text}</HeaderText>;
};

export default HeaderTitle;
