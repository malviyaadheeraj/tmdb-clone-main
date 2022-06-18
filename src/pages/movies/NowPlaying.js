import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getNowPlaying } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.home.nowPlayingMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getNowPlaying());
  }, [dispatch]);

  return (
    <div className="popularMoviesWrapper">
      <h2>Now Playing</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {nowPlayingMovies &&
            nowPlayingMovies.map((nowPlayingMovie, key) => (
              <div className="popularMoviesCard" key={key}>
                <img
                  src={`${base_url}${nowPlayingMovie.poster_path}`}
                  alt=""
                  className="popularMoviesImage"
                />
                <small>{nowPlayingMovie.vote_average}</small>
                <h4>
                  {nowPlayingMovie?.title ||
                    nowPlayingMovie?.name ||
                    nowPlayingMovie?.original_name}
                </h4>
                <span>
                  {moment(
                    nowPlayingMovie.release_date ||
                      nowPlayingMovie.first_air_date
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

export default NowPlaying;
