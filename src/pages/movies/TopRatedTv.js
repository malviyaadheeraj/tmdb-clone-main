import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopRatedTvShows } from "../../redux/homeAction";
import "./PopularMovies.scss";

const TopRatedTv = () => {
  const dispatch = useDispatch();
  const topRatedTvShows = useSelector((state) => state.home.topRatedTvShows);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getTopRatedTvShows());
  }, []);

  return (
    <div className="popularMoviesWrapper">
      <h2>Top Rated TV Shows</h2>
      <div className="popularMovies">
        <div className="popularMoviesLeft">popularMoviesLeft</div>
        <div className="popularMoviesRight">
          {topRatedTvShows &&
            topRatedTvShows.map((topRatedTvShow, key) => (
              <div className="popularMoviesCard" key={key}>
                <img
                  src={`${base_url}${topRatedTvShow.poster_path}`}
                  alt=""
                  className="popularMoviesImage"
                />
                <small>{topRatedTvShow.vote_average}</small>
                <h4>
                  {topRatedTvShow?.title ||
                    topRatedTvShow?.name ||
                    topRatedTvShow?.original_name}
                </h4>
                <span>
                  {topRatedTvShow.release_date || topRatedTvShow.first_air_date}
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