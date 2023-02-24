import { Fragment } from "react"
import { NameSpan, NavigationColorModeIcon, NavigationContainer, NavigationMenu, NavigationMenuContainer } from "./navigation.styles"
import { ReactComponent as DarkModeIcon } from "./../../assets/dark_mode_icon.svg"


const Navigation = () => {
    const navigationMenus = ["Home", "About", "Project", "Skills", "Contact"]
    return (
        <Fragment>
            <NavigationContainer>
                <NameSpan>
                    Ikenna
                </NameSpan>

                <NavigationMenuContainer>
                    {
                        navigationMenus.map(navigationMenu =>
                        (
                            <NavigationMenu>
                                {navigationMenu}
                            </NavigationMenu>
                        ))
                    }

                    <NavigationColorModeIcon>
                        <DarkModeIcon />

                    </NavigationColorModeIcon>

                </NavigationMenuContainer>
            </NavigationContainer>

        </Fragment>
    )
}

export default Navigation