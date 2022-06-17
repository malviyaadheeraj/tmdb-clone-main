import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <h2 className="loginTitle">Login to your account</h2>
      <p>
        In order to use the editing and rating capabilities of TMDB, as well as
        get personal recommendations you will need to login to your account. If
        you do not have an account, registering for an account is free and
        simple. &nbsp;
        <Link to="#" className="loginLink">
          Click here
        </Link>{" "}
        to get started.
      </p>
      <p>
        If you signed up but didn't get your verification email,&nbsp;&nbsp;
        <Link to="#" className="loginLink">
          Click here
        </Link>{" "}
        to have it resent.
      </p>

      <form onSubmit={handleSubmit} className="loginFrom">
        <div className="loginInputWrapper">
          <label htmlFor="username">Username</label>
          <input type="email" className="loginInput" required />
        </div>
        <div className="loginInputWrapper">
          <label htmlFor="password">Password</label>
          <input type="password" className="loginInput" required />
        </div>
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
