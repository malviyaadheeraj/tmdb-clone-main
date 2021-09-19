import React, { useEffect, useState } from "react";
import axios from "../../redux/axios";
import "./Streaming.scss";

const Streaming = () => {
  // const [movies, setMovies] = useState("");
  // const fetchMostPopularMovies = `movie/popular?api_key=9f9076158baa1526af5c4cf189980da9&language=en-US&page=1`;
  // const base_url = "https://image.tmdb.org/t/p/original/";

  // useEffect(() => {
  //   axios
  //     .get(fetchMostPopularMovies)
  //     .then((res) => setMovies(res.data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="streamingRow">
      {/* {movies &&
        movies.map((movie, key) => (
          <div className="streamingCard" key={key}>
            <img
              src={`${base_url}${movie.poster_path}`}
              alt=""
              className="streamingImage"
            />
            <small>
              {movie.vote_average}
            </small>
            <h4>{movie.title}</h4>
            <span>{movie.release_date}</span>
          </div>
        ))} */}
      hello world
    </div>
  );
};

export default Streaming;
