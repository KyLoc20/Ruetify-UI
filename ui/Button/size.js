const SizeMap = {
    xsm: { height: 20, fontSize: 10, paddingY: 0, paddingX: 9 },
    sm: { height: 28, fontSize: 12, paddingY: 0, paddingX: 12 },
    md: { height: 36, fontSize: 14, paddingY: 0, paddingX: 16 },
    lg: { height: 44, fontSize: 14, paddingY: 0, paddingX: 20 },
    xlg: { height: 52, fontSize: 16, paddingY: 0, paddingX: 23 },
};

function getSize(type) {
    const sizeSet = SizeMap[type] || SizeMap["md"];
    return {
        height: `${sizeSet["height"]}px`,
        fontSize: `${sizeSet["fontSize"]}px`,
        padding: `${sizeSet["paddingY"]}px ${sizeSet["paddingX"]}px`,
    };
}
export { getSize }