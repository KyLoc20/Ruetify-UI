import { css, jsx } from "@emotion/react";
import Head from "next/head";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import AppDetail from "./AppDetail";
import NavigationCatalog from "./NavigationCatalog";
import AppBar from "./AppBar";
import MainContext from "./MainContext";
import ContentCatalog from "./ContentCatalog";
const Page = styled("section")`
  display: flex;
  position: relative;
`;
const LeftContainer = styled("section")`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 300px;
  height: 100vh;
`;
const RightContainer = styled("section")`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
`;

export default function AppContainer() {
  return (
    <Page>
      <Head>
        <title>Ruetify-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftContainer>
        <AppDetail version="v0.0.1"></AppDetail>
        <NavigationCatalog></NavigationCatalog>
      </LeftContainer>
      <RightContainer>
        <AppBar></AppBar>
        <MainContext></MainContext>
        <ContentCatalog></ContentCatalog>
      </RightContainer>
      {/* <AppDetail version="0.0.1"></AppDetail> */}
      {/* <LeftContainer>
        <AppDetail version="0.0.1"></AppDetail>
        <NavigationCatalog></NavigationCatalog>
      </LeftContainer>
      <RightContainer>
        <AppBar></AppBar>
        <MainContext></MainContext>
        <ContentCatalog></ContentCatalog>
      </RightContainer> */}
    </Page>
  );
}
