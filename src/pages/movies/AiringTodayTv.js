import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getAiringTvShows } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";

const AiringTodayTv = () => {
  const dispatch = useDispatch();
  const airingTodayShows = useSelector((state) => state.home.airingTodayShows);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getAiringTvShows());
  }, [dispatch]);

  return (
    <div className="popularMoviesWrapper">
      <h2>TV Shows Airing Today</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {airingTodayShows &&
            airingTodayShows.map((airingTodayShow, key) => (
              <div className="popularMoviesCard" key={key}>
                <Link to={`/movie-details/${airingTodayShow.id}`}>
                  <img
                    src={`${base_url}${airingTodayShow.poster_path}`}
                    alt=""
                    className="popularMoviesImage"
                  />
                </Link>
                <small>{airingTodayShow.vote_average}</small>
                <Link to={`/movie-details/${airingTodayShow.id}`}>
                  <h4>
                    {airingTodayShow?.title ||
                      airingTodayShow?.name ||
                      airingTodayShow?.original_name}
                  </h4>
                </Link>
                <span>
                  {moment(
                    airingTodayShow.release_date ||
                      airingTodayShow.first_air_date
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

export default AiringTodayTv;
