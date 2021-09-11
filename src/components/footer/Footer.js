import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBox">
        <img src="assets/footerlogo.svg" alt="" className="footerBoxImage" />
        <h3 className="footerBoxUsername">Hi Dheeraj Malviya</h3>
      </div>
      <div className="footerBox">
        <small className="footerBoxTitle">TIME BASICS</small>
        <ul className="footerBoxNav">
          <li className="footerBoxItem">About TMDB</li>
          <li className="footerBoxItem">Contact Us</li>
          <li className="footerBoxItem">Support Forums</li>
          <li className="footerBoxItem">API</li>
          <li className="footerBoxItem">System Status</li>
        </ul>
      </div>
      <div className="footerBox">
        <small className="footerBoxTitle">GET INVOLVED</small>
        <ul className="footerBoxNav">
          <li className="footerBoxItem">Contribution Bible</li>
          <li className="footerBoxItem">3rd Party Applications</li>
          <li className="footerBoxItem">Add New Movie</li>
          <li className="footerBoxItem">Add New TV Show</li>
        </ul>
      </div>
      <div className="footerBox">
        <small className="footerBoxTitle">COMMUNITY</small>
        <ul className="footerBoxNav">
          <li className="footerBoxItem">Guidelines</li>
          <li className="footerBoxItem">Discussions</li>
          <li className="footerBoxItem">Leaderboard</li>
          <li className="footerBoxItem">Twitter</li>
        </ul>
      </div>
      <div className="footerBox">
        <small className="footerBoxTitle">LEGEL</small>
        <ul className="footerBoxNav">
          <li className="footerBoxItem">Terms of Use</li>
          <li className="footerBoxItem">API Terms of Use</li>
          <li className="footerBoxItem">Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
