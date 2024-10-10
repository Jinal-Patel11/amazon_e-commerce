import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../Firebase';
import './Login.css'; // Separate CSS file for better maintainability
import { myContext } from '../Context';
import {useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Login
  const {fnLogged} = useContext(myContext)
  const Navigate = useNavigate()


  const auth = getAuth(app);

  function handleAuth() {
    if (isSignUp) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("Sign Up Success");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Login logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // alert("Login Success");
          fnLogged({
            user:"Jinal",
            isLogged:true
          })
          Navigate("/")
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">{isSignUp ? "Sign Up" : "Login"}</h2>
        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleAuth}>
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        <div className="toggle-auth">
          <p style={{marginTop:"20px"}}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button">
              {isSignUp ? "Login" : "Sign Up"}  
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
