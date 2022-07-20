import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDocumentriesMovies } from "../../redux/homeAction";
import moment from "moment";
import { Link } from "react-router-dom";
import "./TrendingMovies.scss";

const DocumentriesMovies = () => {
  const dispatch = useDispatch();
  const documentriesMovies = useSelector(
    (state) => state.home.documentriesMovies
  );
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getDocumentriesMovies());
  }, [dispatch]);

  return (
    <div className="homeTrending">
      <h2>Documentries Movies</h2>
      <div className="homeTrendingRow">
        {documentriesMovies &&
          documentriesMovies.map((documentriesMovie, key) => (
            <div className="homeTrendingCard" key={key}>
              <Link to={`/movie-details/${documentriesMovie.id}`}>
                <img
                  src={`${base_url}${documentriesMovie.poster_path}`}
                  alt=""
                  className="homeTrendingImage"
                />
              </Link>
              {/* <small>{documentriesMovie.vote_average}</small> */}
              <Link to={`/movie-details/${documentriesMovie.id}`}>
                <h4>
                  {documentriesMovie?.title ||
                    documentriesMovie?.name ||
                    documentriesMovie?.original_name}
                </h4>
              </Link>
              <span>
                {moment(
                  documentriesMovie.release_date ||
                    documentriesMovie.first_air_date
                ).format("DD MMM YYYY")}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DocumentriesMovies;
