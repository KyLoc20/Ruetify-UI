import * as React from "react";
const ButtonPageContentContext = React.createContext({
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
});
export { ButtonPageContentContext }