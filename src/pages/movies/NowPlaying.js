import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getNowPlaying } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const nowPlayingMovies = useSelector((state) => state.home.nowPlayingMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getNowPlaying(pageNumber));
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="popularMoviesWrapper">
      <h2>Now Playing</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {loading === true ? (
            <Loading />
          ) : (
            <>
              {nowPlayingMovies &&
                nowPlayingMovies.map((nowPlayingMovie, key) => (
                  <div className="popularMoviesCard" key={key}>
                    <Link to={`/movie-details/${nowPlayingMovie.id}`}>
                      <img
                        src={`${base_url}${nowPlayingMovie.poster_path}`}
                        alt=""
                        className="popularMoviesImage"
                      />
                    </Link>
                    {/* <small>{nowPlayingMovie.vote_average}</small> */}
                    <Link to={`/movie-details/${nowPlayingMovie.id}`}>
                      <h4>
                        {nowPlayingMovie?.title ||
                          nowPlayingMovie?.name ||
                          nowPlayingMovie?.original_name}
                      </h4>
                    </Link>
                    <span>
                      {moment(
                        nowPlayingMovie.release_date ||
                          nowPlayingMovie.first_air_date
                      ).format("DD MMM YYYY")}
                    </span>
                  </div>
                ))}
            </>
          )}

          <div className="popularButton" onClick={handleLoadMore}>
            Load More
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
