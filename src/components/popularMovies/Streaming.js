import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopularMovies } from "../../redux/homeAction";
import "./Streaming.scss";

const Streaming = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.home.popularMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <div className="streamingRow">
      {popularMovies &&
        popularMovies.map((popularMovie, key) => (
          <div className="streamingCard" key={key}>
            <img
              src={`${base_url}${popularMovie.poster_path}`}
              alt=""
              className="streamingImage"
            />
            <small>{popularMovie.vote_average}</small>
            <h4>{popularMovie.title}</h4>
            <span>{popularMovie.release_date}</span>
          </div>
        ))}
    </div>
  );
};

export default Streaming;
