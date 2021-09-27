import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNowPlaying } from "../../redux/homeAction";
import "./PopularMovies.scss";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.home.nowPlayingMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getNowPlaying());
  }, []);

  return (
    <div className="popularMoviesWrapper">
      <h2>Now Playing</h2>
      <div className="popularMovies">
        <div className="popularMoviesLeft">popularMoviesLeft</div>
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
                  {nowPlayingMovie.release_date ||
                    nowPlayingMovie.first_air_date}
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
