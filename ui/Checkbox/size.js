const SizeMap = {
    sm: { checkbox: 36, icon: 20 },
    md: { checkbox: 40, icon: 24 },
    lg: { checkbox: 44, icon: 28 },
};

function getSize(size, type) {
    if (typeof size === "number") return size
    const sizeSet = SizeMap[size] || SizeMap["md"];
    return sizeSet[type]
}
export { getSize }