import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPopularMovies,
  getPopularTv,
  getActionMovies,
  getHorrorMovies,
  getRomanceMovies,
} from "../../redux/homeAction";
import "./PopularMovies.scss";

const PopularMovies = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.home.popularMovies);
  const popularTvShows = useSelector((state) => state.home.popularTvShows);
  const actionMovies = useSelector((state) => state.home.actionMovies);
  const horrorMovies = useSelector((state) => state.home.horrorMovies);
  const romanceMovies = useSelector((state) => state.home.romanceMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getPopularTv());
    dispatch(getActionMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
  }, [dispatch]);

  return (
    <div className="homePopular">
      <div className="homePopularHeader">
        <h2>What's Popular</h2>
        <div className="homePopularSelector">
          <div
            className={`button ${currentTab === 0 && "button-active"}`}
            onClick={() => setCurrentTab(0)}
          >
            Streaming
          </div>
          <div
            className={`button ${currentTab === 1 && "button-active"}`}
            onClick={() => setCurrentTab(1)}
          >
            On TV
          </div>
          <div
            className={`button ${currentTab === 2 && "button-active"}`}
            onClick={() => setCurrentTab(2)}
          >
            Action
          </div>
          <div
            className={`button ${currentTab === 3 && "button-active"}`}
            onClick={() => setCurrentTab(3)}
          >
            Horror
          </div>
          <div
            className={`button ${currentTab === 4 && "button-active"}`}
            onClick={() => setCurrentTab(4)}
          >
            Romance
          </div>
        </div>
      </div>
      {currentTab === 0 && (
        <div className="homePopularRow">
          {popularMovies &&
            popularMovies.map((popularMovie, key) => (
              <div className="homePopularCard" key={key}>
                <Link to={`/movie-details/${popularMovie.id}`}>
                  <img
                    src={`${base_url}${popularMovie.poster_path}`}
                    alt=""
                    className="homePopularImage"
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
        </div>
      )}
      {currentTab === 1 && (
        <div className="homePopularRow">
          {popularTvShows &&
            popularTvShows.map((popularTvShow, key) => (
              <div className="homePopularCard" key={key}>
                <Link to={`/tv-details/${popularTvShow.id}`}>
                  <img
                    src={`${base_url}${popularTvShow.poster_path}`}
                    alt=""
                    className="homePopularImage"
                  />
                </Link>
                <small>{popularTvShow.vote_average}</small>
                <Link to={`/tv-details/${popularTvShow.id}`}>
                  <h4>
                    {popularTvShow?.title ||
                      popularTvShow?.name ||
                      popularTvShow?.original_name}
                  </h4>
                </Link>
                <span>
                  {moment(
                    popularTvShow.release_date || popularTvShow.first_air_date
                  ).format("DD MMM YYYY")}
                </span>
              </div>
            ))}
        </div>
      )}
      {currentTab === 2 && (
        <div className="homePopularRow">
          {actionMovies &&
            actionMovies.map((actionMovie, key) => (
              <div className="homePopularCard" key={key}>
                <Link to={`/movie-details/${actionMovie.id}`}>
                  <img
                    src={`${base_url}${actionMovie.poster_path}`}
                    alt=""
                    className="homePopularImage"
                  />
                </Link>
                <small>{actionMovie.vote_average}</small>
                <Link to={`/movie-details/${actionMovie.id}`}>
                  <h4>
                    {actionMovie?.title ||
                      actionMovie?.name ||
                      actionMovie?.original_name}
                  </h4>
                </Link>
                <span>
                  {moment(
                    actionMovie.release_date || actionMovie.first_air_date
                  ).format("DD MMM YYYY")}
                </span>
              </div>
            ))}
        </div>
      )}
      {currentTab === 3 && (
        <div className="homePopularRow">
          {horrorMovies &&
            horrorMovies.map((horrorMovie, key) => (
              <div className="homePopularCard" key={key}>
                <Link to={`/movie-details/${horrorMovie.id}`}>
                  <img
                    src={`${base_url}${horrorMovie.poster_path}`}
                    alt=""
                    className="homePopularImage"
                  />
                </Link>
                <small>{horrorMovie.vote_average}</small>
                <Link to={`/movie-details/${horrorMovie.id}`}>
                  <h4>
                    {horrorMovie?.title ||
                      horrorMovie?.name ||
                      horrorMovie?.original_name}
                  </h4>
                </Link>
                <span>
                  {moment(
                    horrorMovie.release_date || horrorMovie.first_air_date
                  ).format("DD MMM YYYY")}
                </span>
              </div>
            ))}
        </div>
      )}
      {currentTab === 4 && (
        <div className="homePopularRow">
          {romanceMovies &&
            romanceMovies.map((romanceMovie, key) => (
              <div className="homePopularCard" key={key}>
                <Link to={`/movie-details/${romanceMovie.id}`}>
                  <img
                    src={`${base_url}${romanceMovie.poster_path}`}
                    alt=""
                    className="homePopularImage"
                  />
                </Link>
                <small>{romanceMovie.vote_average}</small>
                <Link to={`/movie-details/${romanceMovie.id}`}>
                  <h4>
                    {romanceMovie?.title ||
                      romanceMovie?.name ||
                      romanceMovie?.original_name}
                  </h4>
                </Link>
                <span>
                  {moment(
                    romanceMovie.release_date || romanceMovie.first_air_date
                  ).format("DD MMM YYYY")}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PopularMovies;
