import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getUpComingMovies } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const UpComingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const upComingMovies = useSelector((state) => state.home.upComingMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getUpComingMovies(pageNumber));
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
      <h2>Up Coming Movies</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {loading === true ? (
            <Loading />
          ) : (
            <>
              {upComingMovies &&
                upComingMovies.map((upComingMovie, key) => (
                  <div className="popularMoviesCard" key={key}>
                    <Link to={`/movie-details/${upComingMovie.id}`}>
                      <img
                        src={`${base_url}${upComingMovie.poster_path}`}
                        alt=""
                        className="popularMoviesImage"
                      />
                    </Link>
                    {/* <small>{upComingMovie.vote_average}</small> */}
                    <Link to={`/movie-details/${upComingMovie.id}`}>
                      <h4>
                        {upComingMovie?.title ||
                          upComingMovie?.name ||
                          upComingMovie?.original_name}
                      </h4>
                    </Link>
                    <span>
                      {moment(
                        upComingMovie.release_date ||
                          upComingMovie.first_air_date
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

export default UpComingMovies;
