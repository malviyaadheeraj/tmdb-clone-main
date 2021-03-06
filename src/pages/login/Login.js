import React, { useState } from "react";
import "./Login.scss";
import { auth, facebookProvider, googleProvider } from "../../firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [values, setValues] = useState();
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        var user = userCredential.user;
        localStorage.setItem("user-login", JSON.stringify(user));
        if (user) {
          history.push("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        var user = result.user;
        localStorage.setItem("user-login", JSON.stringify(user));
        if (user) {
          history.push("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleFacebookLogin = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => {
        var user = result.user;
        localStorage.setItem("user-login", JSON.stringify(user));
        if (user) {
          history.push("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="login">
      <h2 className="loginTitle">Login to your account</h2>
      <p>
        Signing in for an account is free and easy. Fill out the form below to
        get started. JavaScript is required to to continue.
      </p>

      {error && (
        <div className="login-error">
          <h3 className="login-errorTitle">
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            <span>There was an error processing your signin</span>
          </h3>
          <ul className="loginError-text ">
            <li>{error}</li>
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="loginFrom">
        <div className="loginInputWrapper">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            name="email"
            value={values && values.email}
            className="loginInput"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="loginInputWrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values && values.password}
            className="loginInput"
            onChange={onInputChange}
            required
          />
        </div>
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>

      <div className="socialLogin-wrapper">
        <div className="googleSocial-wrapper" onClick={handleGoogleLogin}>
          <img src="/assets/google-image.jpg" alt="" />
          <span>Login with google</span>
        </div>
        <div className="googleSocial-wrapper" onClick={handleFacebookLogin}>
          <img src="/assets/facebook-image.jpg" alt="" />
          <span>Login with facebook</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
