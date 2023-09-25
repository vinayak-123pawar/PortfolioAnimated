// import logo from "./logo.svg";
// import HeroSection from "./Components/HeroSection";
// import { useEffect, useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (event) => {
//     event.preventDefault();

//     // Perform username and password validation
//     if (username === "yourUsername" && password === "yourPassword") {
//       setIsLoggedIn(true);
//       localStorage.setItem("isLoggedIn", "true");
//       setUsername("");
//       setPassword("");
//     } else {
//       alert("Invalid username or password. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const isLoggedIn = localStorage.getItem("isLoggedIn");
//       if (isLoggedIn === "true") {
//         setIsLoggedIn(true);
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   useEffect(() => {
//     const logoutAfterTwoHours = () => {
//       const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;

//       const logoutTimer = setTimeout(() => {
//         handleLogout();
//         alert("You have been automatically logged out due to inactivity.");
//       }, twoHoursInMilliseconds);

//       return () => clearTimeout(logoutTimer);
//     };

//     if (isLoggedIn) {
//       logoutAfterTwoHours();
//     }
//   }, [isLoggedIn]);

//   if (isLoggedIn) {
//     return (
//       <div>
//         <HeroSection />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import MainScreen from "./Components/Login/MainScreen";
import "./App.scss";
import Footer from "./Components/Footer";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // When the component mounts, start the timer for automatic logout after 2 hours
    const logoutTimer = setTimeout(() => {
      handleLogout();
    }, 2 * 60 * 60 * 1000);

    // Clean up the timer on component unmount to prevent memory leaks
    return () => clearTimeout(logoutTimer);
  }, [loggedIn]);


  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <MainScreen />
          <Footer onLogout={handleLogout} />
        </div>
      ) : (<>
        <Login onLogin={handleLogin} />
      </>
      )}
    </div>
  );
};

export default App;
