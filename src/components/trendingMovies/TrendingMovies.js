import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrendingMovies } from "../../redux/homeAction";
import "./TrendingMovies.scss";

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.home.trendingMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  return (
    <div className="homeTrending">
      <h2>Trending Movies</h2>
      <div className="homeTrendingRow">
        {trendingMovies &&
          trendingMovies.map((trendingMovie, key) => (
            <div className="homeTrendingCard" key={key}>
              <img
                src={`${base_url}${trendingMovie.poster_path}`}
                alt=""
                className="homeTrendingImage"
              />
              <small>{trendingMovie.vote_average}</small>
              <h4>
                {trendingMovie?.title ||
                  trendingMovie?.name ||
                  trendingMovie?.original_name}
              </h4>
              <span>
                {trendingMovie.release_date || trendingMovie.first_air_date}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
