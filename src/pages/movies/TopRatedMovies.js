import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getTopRatedMovies } from "../../redux/homeAction";
import "./PopularMovies.scss";
import PopularMoviesLeft from "./PopularMoviesLeft";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const topRatedMovies = useSelector((state) => state.home.topRatedMovies);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getTopRatedMovies(pageNumber));
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
      <h2>Top Rated Movies</h2>
      <div className="popularMovies">
        <PopularMoviesLeft />
        <div className="popularMoviesRight">
          {loading === true ? (
            <Loading />
          ) : (
            <>
              {topRatedMovies &&
                topRatedMovies.map((topRatedMovie, key) => (
                  <div className="popularMoviesCard" key={key}>
                    <Link to={`/movie-details/${topRatedMovie.id}`}>
                      <img
                        src={`${base_url}${topRatedMovie.poster_path}`}
                        alt=""
                        className="popularMoviesImage"
                      />
                    </Link>
                    {/* <small>{topRatedMovie.vote_average}</small> */}
                    <Link to={`/movie-details/${topRatedMovie.id}`}>
                      <h4>
                        {topRatedMovie?.title ||
                          topRatedMovie?.name ||
                          topRatedMovie?.original_name}
                      </h4>
                    </Link>
                    <span>
                      {moment(
                        topRatedMovie.release_date ||
                          topRatedMovie.first_air_date
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

export default TopRatedMovies;
