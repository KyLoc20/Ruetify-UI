import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const bdGrey = css({
  border: "thin solid rgba(0,0,0,.12)",
});
const br4 = css({
  borderRadius: "4px",
});

const shadow1 = css({
  boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
});
const shadow2 = css({
  boxShadow: `0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)`,
});
const setMargin = (value) =>
  css({
    "& > *": {
      margin: `${value}px`,
    },
  });
const setMarginBottom = (value) =>
  css({
    "& > *": {
      marginBottom: `${value}px`,
    },
  });
const setMarginRight = (value) =>
  css({
    "& > *": {
      marginRight: `${value}px`,
    },
  });
const margin8 = css({
  "& > *": {
    margin: "8px",
  },
});
const marginR8 = css({
  "& > *": {
    marginRight: "8px",
  },
});
const marginB8 = css({
  "& > *": {
    marginBottom: "8px",
  },
});
export {
  shadow1,
  shadow2,
  bdGrey,
  br4,
  margin8,
  marginR8,
  marginB8,
  setMargin,
  setMarginBottom,
  setMarginRight,
};
