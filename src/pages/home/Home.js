import React from "react";
import PopularMovies from "../../components/popularMovies/PopularMovies";
import DocumentriesMovies from "../../components/trendingMovies/DocumentriesMovies";
import TrendingMovies from "../../components/trendingMovies/TrendingMovies";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeBanner">
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
      <DocumentriesMovies />
    </div>
  );
};

export default Home;
