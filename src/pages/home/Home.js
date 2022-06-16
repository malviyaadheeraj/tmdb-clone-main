import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import PopularMovies from "../../components/popularMovies/PopularMovies";
import DocumentriesMovies from "../../components/trendingMovies/DocumentriesMovies";
import TrendingMovies from "../../components/trendingMovies/TrendingMovies";
import "./Home.scss";

const Home = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    history.push("/search");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="home">
      <div className="homeBanner">
        <h1 className="homeBannerTitle">Welcome.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <form onSubmit={handleSearch} className="homeBannerSearch">
          <input
            type="text"
            className="homeBannerInput"
            placeholder="Search for a movie, tv shows, person......"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <PopularMovies />
      <TrendingMovies />
      <DocumentriesMovies />
    </div>
  );
};

export default Home;
