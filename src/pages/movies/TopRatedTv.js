import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getTopRatedTvShows } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";

const TopRatedTv = () => {
  const dispatch = useDispatch();
  const topRatedTvShows = useSelector((state) => state.home.topRatedTvShows);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getTopRatedTvShows());
  }, [dispatch]);

  return (
    <div className="popularMoviesWrapper">
      <h2>Top Rated TV Shows</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {topRatedTvShows &&
            topRatedTvShows.map((topRatedTvShow, key) => (
              <div className="popularMoviesCard" key={key}>
                <Link to={`/movie-details/${topRatedTvShow.id}`}>
                  <img
                    src={`${base_url}${topRatedTvShow.poster_path}`}
                    alt=""
                    className="popularMoviesImage"
                  />
                </Link>
                <small>{topRatedTvShow.vote_average}</small>
                <Link to={`/movie-details/${topRatedTvShow.id}`}>
                  <h4>
                    {topRatedTvShow?.title ||
                      topRatedTvShow?.name ||
                      topRatedTvShow?.original_name}
                  </h4>
                </Link>
                <span>
                  {moment(
                    topRatedTvShow.release_date || topRatedTvShow.first_air_date
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

export default TopRatedTv;
