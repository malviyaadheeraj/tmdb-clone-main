import React from "react";
import "./Register.scss";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-wrapper">
      <div className="register-left">
        <h3 className="register-heading">Benefits of being a member</h3>
        <div className="register-leftItem">
          <span>•</span>
          <p>Find something to watch on your subscribed streaming services</p>
        </div>
        <div className="register-leftItem">
          <span>•</span>
          <p>Log the movies and TV shows you have watched</p>
        </div>
        <div className="register-leftItem">
          <span>•</span>
          <p>
            Keep track of your favourite movies and TV shows and get
            recommendations from them
          </p>
        </div>
        <div className="register-leftItem">
          <span>•</span>
          <p>Build and maintain a personal watchlist</p>
        </div>
        <div className="register-leftItem">
          <span>•</span>
          <p>Contribute to, and improve the information in our database</p>
        </div>
      </div>
      <div className="register-right">
        <h2 className="registerTitle">Sign up for an account</h2>
        <p className="register-rightPara">
          Signing up for an account is free and easy. Fill out the form below to
          get started. JavaScript is required to to continue.
        </p>

        <form onSubmit={handleSubmit} className="registerFrom">
          <div className="registerInputWrapper">
            <label htmlFor="username">Username</label>
            <input type="email" className="registerInput" required />
          </div>
          <div className="registerInputWrapper">
            <label htmlFor="password">Password</label>
            <input type="password" className="registerInput" required />
          </div>
          <button type="submit" className="registerButton">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
