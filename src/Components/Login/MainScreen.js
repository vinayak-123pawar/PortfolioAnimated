import React from "react";
import "./style.scss";
import Content from "../Content";
import WorkSection from "../WorkSection";
import TestomonialSection from "../TestomonialSection";
import Introduction from "../Introduction";
import Footer from "../Footer";
import Header from "../Header";

function MainScreen() {
  return (<>
    <Header />
    <Content />
    <Introduction />
    <WorkSection />
    <TestomonialSection />
    <Footer />
  </>
  );
};

export default MainScreen;
