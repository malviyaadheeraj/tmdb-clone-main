import React from "react";
import PopularMovies from "../popularMovies/PopularMovies";
import TrendingMovies from "../trendingMovies/TrendingMovies";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeBanner">
        <div className="background-color"></div>
        <h1 className="homeBannerTitle">Welcome.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="homeBannerSearch">
          <input
            type="text"
            className="homeBannerInput"
            placeholder="Search for a movie, tv shows, person......"
          />
          <button>Search</button>
        </div>
      </div>
      <PopularMovies />
      <TrendingMovies />
    </div>
  );
};

export default Home;
