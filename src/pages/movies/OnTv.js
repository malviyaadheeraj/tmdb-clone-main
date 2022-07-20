import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOnTvShows } from "../../redux/homeAction";
import "./PopularMovies.scss";
import moment from "moment";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const OnTv = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const onTvShows = useSelector((state) => state.home.onTvShows);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getOnTvShows(pageNumber));
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
      <h2>Currently Airing TV Shows</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {loading === true ? (
            <Loading />
          ) : (
            <>
              {onTvShows &&
                onTvShows.map((onTvShow, key) => (
                  <div className="popularMoviesCard" key={key}>
                    <Link to={`/tv-details/${onTvShow.id}`}>
                      <img
                        src={`${base_url}${onTvShow.poster_path}`}
                        alt=""
                        className="popularMoviesImage"
                      />
                    </Link>
                    {/* <small>{onTvShow.vote_average}</small> */}
                    <Link to={`/tv-details/${onTvShow.id}`}>
                      <h4>
                        {onTvShow?.title ||
                          onTvShow?.name ||
                          onTvShow?.original_name}
                      </h4>
                    </Link>
                    <span>
                      {moment(
                        onTvShow.release_date || onTvShow.first_air_date
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

export default OnTv;
