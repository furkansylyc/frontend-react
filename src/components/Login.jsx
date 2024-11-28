import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <div>
      <div style={{ height: "60px" }}></div> 
      <h1>Login</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd" />
      </div>
      <div>
        <button onClick={handleNavigate}>Register</button>
      </div>
    </div>
  );
}

export default Login;
