import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
// import Select from "../../ui/Select/Select";
const Page = styled("section")`
  display: flex;
`;
export default function SelectExample() {
  const [selectItems, setSelectItems] = useState([
    { label: "foo", text: "Foo" },
    { label: "bar", text: "Bar" },
    { label: "fizz", text: "Fizz" },
    { label: "buzz", text: "Buzz" },
  ]);
  const handleSelectChange = (label) => {
    console.log("handleSelectChange", label);
  };
  return (
    <Page>  
      123
    </Page>
  );
}
