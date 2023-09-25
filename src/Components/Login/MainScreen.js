import React from "react";
import "./style.scss";
import Header from "../Header";
import Content from "../Content";
import WorkSection from "../WorkSection";
import TestomonialSection from "../TestomonialSection";
import Introduction from "../Introduction";

function MainScreen() {
  return (<>
    <Header />
    <Content />
    <Introduction />
    <WorkSection />
    <TestomonialSection />
  </>
  );
};

export default MainScreen;
