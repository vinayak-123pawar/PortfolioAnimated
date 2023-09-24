import React from "react";
import "./style.scss";
import Header from "../Header";
import Content from "../Content";
import WorkSection from "../WorkSection";
import TestomonialSection from "../TestomonialSection";
import Introduction from "../Introduction";
import Footer from "../Footer";

const MainScreen = ({ onLogout }) => {
  return (<>
    <Header />
    <Content />
    <Introduction />
    <WorkSection />
    <TestomonialSection />
    <Footer />
    <button className="glow-on-hover" onClick={onLogout}>
      Logout
    </button>

  </>
  );
};

export default MainScreen;
