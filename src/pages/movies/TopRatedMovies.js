import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getTopRatedMovies } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.home.topRatedMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  return (
    <div className="popularMoviesWrapper">
      <h2>Top Rated Movies</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {topRatedMovies &&
            topRatedMovies.map((topRatedMovie, key) => (
              <div className="popularMoviesCard" key={key}>
                <Link to={`/movie-details/${topRatedMovie.id}`}>
                  <img
                    src={`${base_url}${topRatedMovie.poster_path}`}
                    alt=""
                    className="popularMoviesImage"
                  />
                </Link>
                <small>{topRatedMovie.vote_average}</small>
                <Link to={`/movie-details/${topRatedMovie.id}`}>
                  <h4>
                    {topRatedMovie?.title ||
                      topRatedMovie?.name ||
                      topRatedMovie?.original_name}
                  </h4>
                </Link>
                <span>
                  {moment(
                    topRatedMovie.release_date || topRatedMovie.first_air_date
                  ).format("DD MMM YYYY")}
                </span>
              </div>
            ))}
          <div className="popularButton">Load More</div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
