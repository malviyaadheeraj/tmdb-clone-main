import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getAiringTvShows } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const AiringTodayTv = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const airingTodayShows = useSelector((state) => state.home.airingTodayShows);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getAiringTvShows(pageNumber));
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
      <h2>TV Shows Airing Today</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {loading === true ? (
            <Loading />
          ) : (
            <>
              {airingTodayShows &&
                airingTodayShows.map((airingTodayShow, key) => (
                  <div className="popularMoviesCard" key={key}>
                    <Link to={`/tv-details/${airingTodayShow.id}`}>
                      <img
                        src={`${base_url}${airingTodayShow.poster_path}`}
                        alt=""
                        className="popularMoviesImage"
                      />
                    </Link>
                    {/* <small>{airingTodayShow.vote_average}</small> */}
                    <Link to={`/tv-details/${airingTodayShow.id}`}>
                      <h4>
                        {airingTodayShow?.title ||
                          airingTodayShow?.name ||
                          airingTodayShow?.original_name}
                      </h4>
                    </Link>
                    <span>
                      {moment(
                        airingTodayShow.release_date ||
                          airingTodayShow.first_air_date
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

export default AiringTodayTv;
