import React from "react";
import "./TrendingMovies.scss";

const TrendingMovies = () => {
  return (
    <div className="homeTrending">
      <h2>Free To Watch</h2>
      <div className="homeTrendingRow">
        <div className="homeTrendingCard">
          <img src="assets/luca.jpg" alt="" className="homeTrendingImage" />
          <small>
            83 <p>%</p>
          </small>
          <h4>Luca</h4>
          <span>17 Jun 2021</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
