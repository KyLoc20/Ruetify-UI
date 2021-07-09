const ColorThemeMap = {
    default: {
        plain: {
            main: [245, 245, 245, 1],
            focus: [0, 0, 0, 0.08], //on hover or select
            text: [0, 0, 0, 0.87], //including text, icon
            ripple: [0, 0, 0, 0.3],
        },
        text: {
            main: [0, 0, 0, 0],
            focus: [238, 238, 238, 1], //on hover or select
            text: [0, 0, 0, 0.87],
            ripple: [0, 0, 0, 0.3],
        },
        outlined: {
            main: [0, 0, 0, 0],
            focus: [238, 238, 238, 1], //on hover or select
            text: [0, 0, 0, 0.87],
            border: [0, 0, 0, 0.87],
            borderFocused: [0, 0, 0, 0.87],
            ripple: [0, 0, 0, 0.3],
        },
    },
    primary: {
        plain: {
            main: [24, 103, 192, 1],
            focus: [42, 115, 197, 1], //on hover or selectrgba
            text: [255, 255, 255, 1], //including text, icon
            ripple: [255, 255, 255, 0.3],
        },
        text: {
            main: [0, 0, 0, 0],
            focus: [237, 243, 250, 1], //on hover or select
            text: [24, 103, 192, 1],
            ripple: [24, 103, 192, 0.3],
        },
        outlined: {
            main: [0, 0, 0, 0],
            focus: [237, 243, 250, 1], //on hover or select
            text: [24, 103, 192, 1],
            border: [24, 103, 192, 0.8],
            borderFocused: [24, 103, 192, 1],
            ripple: [24, 103, 192, 0.3],
        },
    },
    error: {
        plain: {
            main: [255, 82, 82, 1],
            focus: [255, 96, 96, 1], //on hover or select
            text: [255, 255, 255, 1], //including text, icon
            ripple: [255, 255, 255, 0.3],
        },
        text: {
            main: [0, 0, 0, 0],
            focus: [255, 241, 241, 1], //on hover or select
            text: [255, 82, 82, 1],
            ripple: [255, 82, 82, 0.3],
        },
        outlined: {
            main: [0, 0, 0, 0],
            focus: [255, 241, 241, 1], //on hover or select
            text: [255, 82, 82, 1],
            border: [255, 82, 82, 0.8],
            borderFocused: [255, 82, 82, 1],
            ripple: [255, 82, 82, 0.3],
        },
    },
    disabled: {
        plain: {
            main: [0, 0, 0, 0.12],
            text: [0, 0, 0, 0.26], //including text, icon
        },
        text: {
            main: [0, 0, 0, 0],
            text: [0, 0, 0, 0.26],
        },
        outlined: {
            main: [0, 0, 0, 0],
            text: [0, 0, 0, 0.26],
            border: [0, 0, 0, 0.26],
        },
    },
};

function getColor(theme, variant, type) {
    const colorThemeSet = ColorThemeMap[theme] || ColorThemeMap["default"];
    const colorVariantSet = colorThemeSet[variant] || ColorThemeMap["plain"];
    let rgba = colorVariantSet[type];
    if (!rgba)
        throw Error(
            `Not Found the ${type}-color of ${theme}-variant of ${variant}`
        );
    return parseColor(rgba);
}

function parseColor(inputColorArray, alpha) {
    let arr = [...inputColorArray];
    if (alpha) arr[3] = alpha;
    return `rgba(${arr[0]},${arr[1]},${arr[2]},${arr[3]})`;
}
export { getColor, parseColor }