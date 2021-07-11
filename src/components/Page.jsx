import { css, jsx } from "@emotion/react";
import Head from "next/head";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import AppDetail from "./AppDetail";
import NavigationCatalog from "./NavigationCatalog";
import AppBar from "./AppBar";
import MainContext from "./MainContext";
import ContentNavigation from "./ContentNavigation";
const Container = styled("section")`
  display: flex;
  position: relative;
`;
const LeftContainer = styled("section")`
  position: relative;
  flex-shrink:0;
  width: 300px;
  height: 100vh;
`;
const NavigationContext = styled("section")`
  display: flex;
  position: relative;
  flex-direction: column;
  position: fixed;
`;
const RightContainer = styled("section")`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
`;
const getDrawerItems = () => [
  {
    content: { label: "components", text: "Components" },
    children: [
      {
        content: { label: "inputs", text: "Inputs" },
        children: [
          {
            content: {
              label: "autocomplete🚧",
              text: "Autocomplete🚧",
              link: "autocomplete🚧",
            },
          },
          { content: { label: "button", text: "Button🚧", link: "button" } },
          {
            content: {
              label: "checkbox",
              text: "Checkbox🚧",
              link: "checkbox",
            },
          },
          {
            content: {
              label: "float-action-button",
              text: "Float Action Button🚧",
              link: "float-action-button",
            },
          },
          {
            content: {
              label: "radio",
              text: "Radio Button🚧",
              link: "radio-button",
            },
          },
          { content: { label: "rating", text: "Rating🚧", link: "rating" } },
          { content: { label: "select", text: "Select🚧", link: "select" } },
          { content: { label: "slider", text: "Slider🚧", link: "slider" } },
          { content: { label: "textfield", text: "Text Field🚧" } },
        ],
      },
      {
        content: { label: "navigation", text: "Navigation" },
        children: [
          {
            content: {
              label: "bottom-navigation",
              text: "Bottom Navigation🚧",
            },
          },
          { content: { label: "breadcrumbs", text: "Breadcrumbs🚧" } },
          { content: { label: "drawer", text: "Drawer🚧" } },
          { content: { label: "menu", text: "Menu🚧" } },
          { content: { label: "stepper", text: "Stepper🚧", link: "stepper" } },
          { content: { label: "tabs", text: "Tabs🚧" } },
        ],
      },
      {
        content: { label: "surfaces", text: "Surfaces" },
        children: [
          { content: { label: "app-bar", text: "App Bar🚧" } },
          { content: { label: "card", text: "Card🚧", link: "card" } },
        ],
      },
      {
        content: { label: "feedback", text: "Feedback" },
        children: [
          { content: { label: "progress", text: "Progress🚧" } },
          { content: { label: "snackbar", text: "Snackbar🚧" } },
        ],
      },
      {
        content: { label: "data-display", text: "Data Display" },
        children: [
          { content: { label: "avatar", text: "Avatar🚧", link: "avatar" } },
          { content: { label: "badge", text: "Badge🚧" } },
          { content: { label: "chip", text: "Chip🚧", link: "chip" } },
        ],
      },
    ],
  },
  {
    content: { label: "playground", text: "Playground" },
    children: [],
  },
];
export default function PageContainer(props) {
  const [selectedNavigation, setSelectedNavigation] =
    React.useState("autocomplete");
  const handleSelectFromCatalog = (where) => {
    console.log("Here is App, handleSelectFromCatalog", where);
    let link = where.link;
    if (link) {
      setSelectedNavigation(where.label);
    }
  };
  return (
    <Container>
      <Head>
        <title>Ruetify-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftContainer>
        <NavigationContext>
          <AppDetail version="v0.1.0"></AppDetail>
          <NavigationCatalog
            items={getDrawerItems()}
            layerTotal={3}
            indent={6}
            initSelectedLabel={selectedNavigation}
            onChange={handleSelectFromCatalog}
          ></NavigationCatalog>
        </NavigationContext>
      </LeftContainer>
      <RightContainer>
        <AppBar></AppBar>
        <MainContext>{props.children}</MainContext>
        <ContentNavigation></ContentNavigation>
      </RightContainer>
    </Container>
  );
}
