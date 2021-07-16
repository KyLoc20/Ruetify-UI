import { useRouter } from "next/router";
import Head from "next/head";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
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
  flex-shrink: 0;
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
            },
          },
          { content: { label: "button", text: "Button⚡", link: "button" } },
          {
            content: {
              label: "checkbox",
              text: "Checkbox⚡",
              link: "checkbox",
            },
          },
          {
            content: {
              label: "float-action-button",
              text: "Float Action Button🚧",
            },
          },
          {
            content: {
              label: "radio",
              text: "Radio Button🚧",
            },
          },
          { content: { label: "rating", text: "Rating🚧" } },
          { content: { label: "select", text: "Select🚧" } },
          { content: { label: "slider", text: "Slider🚧" } },
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
          { content: { label: "stepper", text: "Stepper🚧" } },
          { content: { label: "tabs", text: "Tabs🚧" } },
        ],
      },
      {
        content: { label: "surfaces", text: "Surfaces" },
        children: [
          { content: { label: "app-bar", text: "App Bar🚧" } },
          { content: { label: "card", text: "Card🚧" } },
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
          { content: { label: "avatar", text: "Avatar🚧" } },
          { content: { label: "badge", text: "Badge🚧" } },
          { content: { label: "chip", text: "Chip🚧" } },
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
  const router = useRouter();
  const [selectedNavigation, setSelectedNavigation] =
    React.useState("autocomplete");
  const handleSelectFromCatalog = (where) => {
    console.log("Here is App, handleSelectFromCatalog", where);
    let link = where.link;
    if (link) {
      setSelectedNavigation(where.label);
      router.push(`/components/${link}`);
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
          <AppDetail version={props.version}></AppDetail>
          <NavigationCatalog
            items={getDrawerItems()}
            layerTotal={3}
            indent={6}
            initSelectedLabel={props.currentNavigationLabel}
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
PageContainer.propTypes = {
  version: PropTypes.string.isRequired,
  currentNavigationLabel: PropTypes.string.isRequired,
};
