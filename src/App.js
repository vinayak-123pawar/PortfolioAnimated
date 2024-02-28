// // import React, { useState, useEffect } from "react";
// import React from "react";
// // import Login from "./Components/Login/Login";
// import MainScreen from "./Components/Login/MainScreen";
// import "./App.scss";
// import LogoSplash from "./Components/LogoSplash";
// // import Header from "./Components/Header";

// const App = () => {
//   //   const [loggedIn, setLoggedIn] = useState(false);

//   //   useEffect(() => {
//   //     // When the component mounts, start the timer for automatic logout after 2 hours
//   //     const logoutTimer = setTimeout(() => {
//   //       handleLogout();
//   //     }, 2 * 60 * 60 * 1000);

//   //     // Clean up the timer on component unmount to prevent memory leaks
//   //     return () => clearTimeout(logoutTimer);
//   //   }, [loggedIn]);


//   //   const handleLogin = () => {
//   //     setLoggedIn(true);
//   //   };

//   //   const handleLogout = () => {
//   //     setLoggedIn(false);
//   //   };

//   return (
//     // <div>
//     //   {loggedIn ? (
//     //     <div className="mainPageWrapper">
//     //       <Header onLogout={handleLogout} />
//     //       <MainScreen />
//     //     </div>
//     //   ) : (<>
//     //     <Login onLogin={handleLogin} />
//     //   
//     //   )}
//     // </div>
//     <>
//       <LogoSplash />
//       <MainScreen />
//     </>

//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import "./App.scss";
import MainScreen from "./Components/Login/MainScreen";
// import logo from './Images/logo512.svg';

const Logo = () => {
  return (
    <div className="logo d-flex justify-content-center align-items-center h-100">
      {/* <img src={logo} alt="Logo" /> */}
      <div class="loader">
        <div class="loader__trampoline"></div>
        <div class="loader__jumper">
          <div class="loader__jumper-face">
            <div class="loader__jumper-eyes"></div>
            <div class="loader__jumper-mouth"></div>
          </div>
        </div>
        <div className="navbar-title justify-content-center mt-4">
          <h3 className="title-last-name mb-0 me-2">Vinayak</h3>
          <h3 className="title-last-name mb-0">Pawar</h3>
        </div>
      </div>
    </div>
  );
};

const OtherContent = () => {
  return (
    <div className="other-content w-100 h-100">
      <MainScreen />
    </div>
  );
};

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Hide the logo after 5 seconds
    const timeout = setTimeout(() => {
      setShowLogo(false);
    }, 5000); // 5 seconds in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      {showLogo ? <Logo /> : <OtherContent />}
    </div>
  );
}

export default App;
