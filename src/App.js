// import React, { useState, useEffect } from "react";
import React from "react";
// import Login from "./Components/Login/Login";
import MainScreen from "./Components/Login/MainScreen";
import "./App.scss";
import LogoSplash from "./Components/LogoSplash";
// import Header from "./Components/Header";

const App = () => {
  //   const [loggedIn, setLoggedIn] = useState(false);

  //   useEffect(() => {
  //     // When the component mounts, start the timer for automatic logout after 2 hours
  //     const logoutTimer = setTimeout(() => {
  //       handleLogout();
  //     }, 2 * 60 * 60 * 1000);

  //     // Clean up the timer on component unmount to prevent memory leaks
  //     return () => clearTimeout(logoutTimer);
  //   }, [loggedIn]);


  //   const handleLogin = () => {
  //     setLoggedIn(true);
  //   };

  //   const handleLogout = () => {
  //     setLoggedIn(false);
  //   };

  return (
    // <div>
    //   {loggedIn ? (
    //     <div className="mainPageWrapper">
    //       <Header onLogout={handleLogout} />
    //       <MainScreen />
    //     </div>
    //   ) : (<>
    //     <Login onLogin={handleLogin} />
    //   
    //   )}
    // </div>
    <>
      <LogoSplash />
      <MainScreen />
    </>

  );
};

export default App;