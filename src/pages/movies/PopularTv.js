import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopularTv } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";

const PopularTv = () => {
  const dispatch = useDispatch();
  const popularTvShows = useSelector((state) => state.home.popularTvShows);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPopularTv());
  }, [dispatch]);

  return (
    <div className="popularMoviesWrapper">
      <h2>Popular Tv Shows</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {popularTvShows &&
            popularTvShows.map((popularTvShow, key) => (
              <div className="popularMoviesCard" key={key}>
                <img
                  src={`${base_url}${popularTvShow.poster_path}`}
                  alt=""
                  className="popularMoviesImage"
                />
                <small>{popularTvShow.vote_average}</small>
                <h4>
                  {popularTvShow?.title ||
                    popularTvShow?.name ||
                    popularTvShow?.original_name}
                </h4>
                <span>
                  {popularTvShow.release_date || popularTvShow.first_air_date}
                </span>
              </div>
            ))}
          <div className="popularButton">Load More</div>
        </div>
      </div>
    </div>
  );
};

export default PopularTv;
