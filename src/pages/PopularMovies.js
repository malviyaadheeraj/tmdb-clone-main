import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/homeAction";
import "./PopularMovies.scss";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.home.popularMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <div className="popularMoviesWrapper">
      <h2>Popular Movies</h2>
      <div className="popularMovies">
        <div className="popularMoviesLeft">popularMoviesLeft</div>
        <div className="popularMoviesRight">
          {popularMovies &&
            popularMovies.map((popularMovie, key) => (
              <div className="popularMoviesCard" key={key}>
                <img
                  src={`${base_url}${popularMovie.poster_path}`}
                  alt=""
                  className="popularMoviesImage"
                />
                <small>{popularMovie.vote_average}</small>
                <h4>{popularMovie.title}</h4>
                <span>{popularMovie.release_date}</span>
              </div>
            ))}
          <div className="popularButton">Load More</div>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
