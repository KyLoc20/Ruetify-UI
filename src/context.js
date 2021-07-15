import * as React from "react";
const PageContentNavigationContext = React.createContext(null);
const ButtonPageContent = {
    routePath: "components/button",
    anchors: [
        { anchor: "ac-variant", text: "Variant" },
        { anchor: "ac-color", text: "Color" },
        { anchor: "ac-size", text: "Size" },
        { anchor: "ac-depressed", text: "Depressed" },
        { anchor: "ac-tile", text: "Tile" },
        { anchor: "ac-rounded", text: "Rounded" },
        { anchor: "ac-loading", text: "Loading" },
    ],
}
const CheckboxPageContent = {
    routePath: "components/checkbox",
    anchors: [
        { anchor: "ac-variant", text: "Variant" },
        { anchor: "ac-color", text: "Color" },
        { anchor: "ac-size", text: "Size" },
        { anchor: "ac-depressed", text: "Depressed" },
        { anchor: "ac-tile", text: "Tile" },
        { anchor: "ac-rounded", text: "Rounded" },
        { anchor: "ac-loading", text: "Loading" },
    ],
};
export { PageContentNavigationContext, ButtonPageContent, CheckboxPageContent }