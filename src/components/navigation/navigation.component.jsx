import React, { Fragment, useContext, useRef, useState } from "react";
import {
  NameSpan,
  NavigationColorModeIcon,
  NavigationContainer,
  NavigationMenu,
  NavigationMenuContainer,
  SiteContainer,
} from "./navigation.styles";
import { ReactComponent as DarkModeIcon } from "./../../assets/dark_mode_icon.svg";
import { ReactComponent as LightModeIcon } from "./../../assets/light_mode.svg";
import Home from "../home/home.component";
import { ThemeContext, ThemeProvider } from "../../context/themeContext";

const Navigation = () => {
  const navigationMenus = ["Home", "About", "Project", "Skills", "Contact"];

  console.log(ThemeContext);

  const { theme, flipTheme } = useContext(ThemeContext);

  const homeRef = useRef(null);

  const scrollToSection = (index) => {
    switch (index) {
      case 0:
        homeRef.current.scrollToHome();
        break;

      case 1:
        homeRef.current.scrollToAbout();
        break;

      case 2:
        homeRef.current.scrollToProject();
        break;

      case 3:
        homeRef.current.scrollToSkills();
        break;

      case 4:
        homeRef.current.scrollToContact();
        break;
      default:
    }
  };

  return (
    <SiteContainer theme={theme}>
      <NavigationContainer>
        <NameSpan theme={theme}>I.</NameSpan>

        <NavigationMenuContainer>
          {navigationMenus.map((navigationMenu, index) => (
            <NavigationMenu
              theme={theme}
              onClick={() => scrollToSection(index)}
            >
              {navigationMenu}
            </NavigationMenu>
          ))}

          <NavigationColorModeIcon theme={theme} onClick={() => flipTheme()}>
            {theme == "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </NavigationColorModeIcon>
        </NavigationMenuContainer>
      </NavigationContainer>

      <Home ref={homeRef} />
    </SiteContainer>
  );
};

export default Navigation;
