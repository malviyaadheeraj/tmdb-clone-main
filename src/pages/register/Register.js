import React, { useState } from "react";
import "./Register.scss";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [values, setValues] = useState({});
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        var user = userCredential.user;
        auth.onAuthStateChanged(function (user) {
          if (user) {
            user
              .updateProfile({
                displayName: values.username,
                photoURL:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIyn-9sU7CATcIqQa4o_6Weiv9ntZJVbVMA&usqp=CAU",
              })
              .then(
                function () {
                  var displayName = user.displayName;
                  var photoURL = user.photoURL;
                },
                function (error) {
                  console.log(error);
                }
              );
          }
        });
        if (user) {
          history.push("/login");
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage);
      });
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
        {error ? (
          <div className="register-error">
            <h3 className="register-errorTitle">
              <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              <span>There was an error processing your signup</span>
            </h3>
            <ul className="registerError-text">
              <li>{error}</li>
            </ul>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="registerFrom">
          <div className="registerInputWrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={values && values.username}
              onChange={onInputChange}
              className="registerInput"
              required
            />
          </div>
          <div className="registerInputWrapper">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              name="email"
              value={values && values.email}
              onChange={onInputChange}
              className="registerInput"
              required
            />
          </div>
          <div className="registerInputWrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values && values.password}
              onChange={onInputChange}
              className="registerInput"
              required
            />
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
