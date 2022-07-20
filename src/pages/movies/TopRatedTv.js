import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getTopRatedTvShows } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const TopRatedTv = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const topRatedTvShows = useSelector((state) => state.home.topRatedTvShows);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getTopRatedTvShows(pageNumber));
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
      <h2>Top Rated TV Shows</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {loading === true ? (
            <Loading />
          ) : (
            <>
              {topRatedTvShows &&
                topRatedTvShows.map((topRatedTvShow, key) => (
                  <div className="popularMoviesCard" key={key}>
                    <Link to={`/tv-details/${topRatedTvShow.id}`}>
                      <img
                        src={`${base_url}${topRatedTvShow.poster_path}`}
                        alt=""
                        className="popularMoviesImage"
                      />
                    </Link>
                    {/* <small>{topRatedTvShow.vote_average}</small> */}
                    <Link to={`/tv-details/${topRatedTvShow.id}`}>
                      <h4>
                        {topRatedTvShow?.title ||
                          topRatedTvShow?.name ||
                          topRatedTvShow?.original_name}
                      </h4>
                    </Link>
                    <span>
                      {moment(
                        topRatedTvShow.release_date ||
                          topRatedTvShow.first_air_date
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

export default TopRatedTv;
