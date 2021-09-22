import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import PopularMovies from "./pages/PopularMovies";
import NowPlaying from "./pages/NowPlaying";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/moviepopular" component={PopularMovies} />
          <Route exact path="/nowplaying" component={NowPlaying} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
