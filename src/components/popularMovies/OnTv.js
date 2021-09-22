import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularTv } from "../../redux/homeAction";

const OnTv = () => {
  const dispatch = useDispatch();
  const popularTvShows = useSelector((state) => state.home.popularMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPopularTv());
  }, []);

  return (
    <div className="streamingRow">
      {popularTvShows &&
        popularTvShows.map((popularTvShow, key) => (
          <div className="streamingCard" key={key}>
            <img
              src={`${base_url}${popularTvShow.poster_path}`}
              alt=""
              className="streamingImage"
            />
            <small>
              83 <p>%</p>
            </small>
            <h4>{popularTvShow.original_name}</h4>
            <span>{popularTvShow.release_date}</span>
          </div>
        ))}
    </div>
  );
};

export default OnTv;
