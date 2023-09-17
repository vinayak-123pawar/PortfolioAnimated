import React, { useState } from "react";
import "./style.scss";
import EyeIcon from "../../Images/EyeIcon.svg";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Here, you can perform any authentication checks (e.g., sending a request to the server)
    // For simplicity, I'm using a hardcoded username and password.
    if (username === "Vinayak" && password === "Vinayak0422") {
      onLogin();
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="LoginWrapper px-4 px-md-0 d-flex align-items-center justify-content-center">
      <div className="cardWrapper">
        <h2 className="mb-4 LoginTitle">Login</h2>
        <div className="mb-4">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="usernameInput mb-4 mb-md-3 w-100"
            />
          </div>
          <div className="position-relative d-flex align-items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="passwordInput w-100"
            />
            <img
              className={
                showPassword
                  ? "HidePass Password c-pointer"
                  : "ShowPass Password c-pointer"
              }
              // src={showPassword ? "hide-password" : "show-password"}
              src={EyeIcon}
              alt={
                showPassword
                  ? "Hide Password c-pointer"
                  : "Show Password c-pointer"
              }
              onClick={handleTogglePassword}
            />
          </div>
        </div>
        <button className="glow-on-hover w-100 mb-5" onClick={handleLogin}>
          Login
        </button>
        <div class="social-media mb-4 d-none d-md-block">
          <div className="d-flex align-items-center justify-content-center">
            <a href="https://www.facebook.com/" class="social-icon">
              <i class="fa fa-list" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/login" class="social-icon">
              <i clas="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.com/" class="social-icon">
              <i clas="fab fa-google"></i>
            </a>
            <a href="https://in.linkedin.com/" class="social-icon">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
