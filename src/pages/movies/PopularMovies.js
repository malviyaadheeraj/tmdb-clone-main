import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getPopularMovies } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.home.popularMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <div className="popularMoviesWrapper">
      <h2>Popular Movies</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {popularMovies &&
            popularMovies.map((popularMovie, key) => (
              <div className="popularMoviesCard" key={key}>
                <Link to={`/movie-details/${popularMovie.id}`}>
                  <img
                    src={`${base_url}${popularMovie.poster_path}`}
                    alt=""
                    className="popularMoviesImage"
                  />
                </Link>
                <small>{popularMovie.vote_average}</small>
                <Link to={`/movie-details/${popularMovie.id}`}>
                  <h4>
                    {popularMovie?.title ||
                      popularMovie?.name ||
                      popularMovie?.original_name}
                  </h4>
                </Link>
                <span>
                  {moment(
                    popularMovie.release_date || popularMovie.first_air_date
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

export default PopularMovies;
