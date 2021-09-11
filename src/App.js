import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
