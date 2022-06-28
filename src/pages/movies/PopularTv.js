import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getPopularTv } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const PopularTv = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const popularTvShows = useSelector((state) => state.home.popularTvShows);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPopularTv(pageNumber));
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
      <h2>Popular Tv Shows</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {loading === true ? (
            <Loading />
          ) : (
            <>
              {popularTvShows &&
                popularTvShows.map((popularTvShow, key) => (
                  <div className="popularMoviesCard" key={key}>
                    <Link to={`/tv-details/${popularTvShow.id}`}>
                      <img
                        src={`${base_url}${popularTvShow.poster_path}`}
                        alt=""
                        className="popularMoviesImage"
                      />
                    </Link>
                    <small>{popularTvShow.vote_average}</small>
                    <Link to={`/tv-details/${popularTvShow.id}`}>
                      <h4>
                        {popularTvShow?.title ||
                          popularTvShow?.name ||
                          popularTvShow?.original_name}
                      </h4>
                    </Link>
                    <span>
                      {moment(
                        popularTvShow.release_date ||
                          popularTvShow.first_air_date
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

export default PopularTv;
