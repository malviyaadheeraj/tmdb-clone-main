import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUpComingMovies } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";

const UpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((state) => state.home.upComingMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getUpComingMovies());
  }, []);

  return (
    <div className="popularMoviesWrapper">
      <h2>Up Coming Movies</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {upComingMovies &&
            upComingMovies.map((upComingMovie, key) => (
              <div className="popularMoviesCard" key={key}>
                <img
                  src={`${base_url}${upComingMovie.poster_path}`}
                  alt=""
                  className="popularMoviesImage"
                />
                <small>{upComingMovie.vote_average}</small>
                <h4>
                  {upComingMovie?.title ||
                    upComingMovie?.name ||
                    upComingMovie?.original_name}
                </h4>
                <span>
                  {upComingMovie.release_date || upComingMovie.first_air_date}
                </span>
              </div>
            ))}
          <div className="popularButton">Load More</div>
        </div>
      </div>
    </div>
  );
};

export default UpComingMovies;
