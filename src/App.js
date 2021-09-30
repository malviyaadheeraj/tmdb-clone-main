import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import PopularMovies from "./pages/movies/PopularMovies";
import NowPlaying from "./pages/movies/NowPlaying";
import UpComingMovies from "./pages/movies/UpComingMovies";
import TopRatedMovies from "./pages/movies/TopRatedMovies";
import PopularTv from "./pages/movies/PopularTv";
import AiringTodayTv from "./pages/movies/AiringTodayTv";
import OnTv from "./pages/movies/OnTv";
import TopRatedTv from "./pages/movies/TopRatedTv";
import People from "./pages/people/People";
import Login from "./pages/login/Login";

function App() {
  const user = null;

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie-popular" component={PopularMovies} />
            <Route exact path="/now-playing" component={NowPlaying} />
            <Route exact path="/top-rated-movies" component={TopRatedMovies} />
            <Route exact path="/up-coming-movies" component={UpComingMovies} />
            <Route exact path="/tv-popular" component={PopularTv} />
            <Route exact path="/airing-today" component={AiringTodayTv} />
            <Route exact path="/on-tv" component={OnTv} />
            <Route exact path="/tv-top-rated" component={TopRatedTv} />
            <Route exact path="/people" component={People} />
          </Switch>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
