import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

export const Login = () => {
  //this history is used to programatically change the URL
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (event) => {
    event.preventDefault();
    //fancy firebase login here!!
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    // firebase register here!!
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //succesfully created a new user
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt="amazonsigninLogoImage"
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Amazon.com-Logo.svg"
        ></img>
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div>
            <button
              className="login__signinbutton"
              onClick={signIn}
              type="input"
            >
              Sign In
            </button>
          </div>
        </form>
        <p style={{ fontSize: "small" }}>
          By creating an account, you agree to Amazon CLONE use :) Conditions of
          Use and Privacy Notice.
        </p>
        <button className="login__registerbutton" onClick={register}>
          Create Your Dummy Amazon Account
        </button>
      </div>
    </div>
  );
};
