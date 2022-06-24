import React, { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
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
              {trendingMovie.media_type === "movie" ? (
                <Link to={`/movie-details/${trendingMovie.id}`}>
                  <img
                    src={`${base_url}${trendingMovie.poster_path}`}
                    alt=""
                    className="homeTrendingImage"
                  />
                </Link>
              ) : trendingMovie.media_type === "tv" ? (
                <Link to={`/tv-details/${trendingMovie.id}`}>
                  <img
                    src={`${base_url}${trendingMovie.poster_path}`}
                    alt=""
                    className="homeTrendingImage"
                  />
                </Link>
              ) : null}
              <small>{trendingMovie.vote_average}</small>
              {trendingMovie.media_type === "movie" ? (
                <Link to={`/movie-details/${trendingMovie.id}`}>
                  <h4>
                    {trendingMovie?.title ||
                      trendingMovie?.name ||
                      trendingMovie?.original_name}
                  </h4>
                </Link>
              ) : trendingMovie.media_type === "tv" ? (
                <Link to={`/tv-details/${trendingMovie.id}`}>
                  <h4>
                    {trendingMovie?.title ||
                      trendingMovie?.name ||
                      trendingMovie?.original_name}
                  </h4>
                </Link>
              ) : null}
              <span>
                {moment(
                  trendingMovie.release_date || trendingMovie.first_air_date
                ).format("DD MMM YYYY")}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
