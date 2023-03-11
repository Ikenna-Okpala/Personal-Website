

export const flipColor = (theme, lightThemeColor, darkThemeColor) => {
    return theme === "light" ? lightThemeColor : darkThemeColor
}

export const flipBrightness = (theme, lowerBrightness, higherBrightness) => {
    return theme === "light" ? lowerBrightness : higherBrightness;
}