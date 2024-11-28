import React from "react";
import { useNavigate } from "react-router-dom"; 

function Register() {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate("/login"); 
  };

  return (
    <div>
      <div style={{ height: "60px" }}></div> 
      <h1>Register</h1>
      <div>
        <label htmlFor="text">Ad Soyad:</label>
        <input id="arama" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd" />
      </div>
      <div>
        <button onClick={handleNavigate}>Login</button> {}
      </div>
    </div>
  );
}

export default Register;
