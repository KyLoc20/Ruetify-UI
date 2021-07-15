const ColorThemeMap = {
    default: {
        checked: [0, 0, 0, 0.54],
        hover: [0, 0, 0, 0.1],
        ripple: [0, 0, 0, 0.3],
    },
    primary: {
        checked: [24, 103, 192, 1],
        hover: [24, 103, 192, 0.2],
        ripple: [24, 103, 192, 0.3],
    },
    success: {
        checked: [76, 175, 80, 1],
        hover: [76, 175, 80, 0.2],
        ripple: [76, 175, 80, 0.3],
    },
    info: {
        checked: [33, 150, 243, 1],
        hover: [33, 150, 243, 0.2],
        ripple: [33, 150, 243, 0.3],
    },
    warning: {
        checked: [251, 140, 0, 1],
        hover: [251, 140, 0, 0.2],
        ripple: [251, 140, 0, 0.3],
    },
    error: {
        checked: [255, 82, 82, 1],
        hover: [255, 82, 82, 0.2],
        ripple: [255, 82, 82, 0.3],
    },
}

function getColor(theme, type) {
    const colorThemeSet = ColorThemeMap[theme] || ColorThemeMap["default"];
    let rgba = colorThemeSet[type];
    if (!rgba)
        throw Error(
            `Not Found the ${type}-color of ${theme}`
        );
    return parseColor(rgba);
}

function parseColor(inputColorArray, alpha) {
    let arr = [...inputColorArray];
    if (alpha) arr[3] = alpha;
    return `rgba(${arr[0]},${arr[1]},${arr[2]},${arr[3]})`;
}
export { getColor, parseColor }