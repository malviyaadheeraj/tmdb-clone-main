import React, { useEffect } from "react";
import "./MovieDetails.scss";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePopularMovies } from "../../redux/homeAction";

const MovieDetails = ({ match }) => {
  const dispatch = useDispatch();
  const singlePopularMoviesShows = useSelector(
    (state) => state.home.singlePopularMoviesShows
  );
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const data = {
      id: match.params.id,
    };
    dispatch(getSinglePopularMovies(data));
  }, []);

  return (
    <div className="movieDetailsWrapper">
      {/* <div className="movieDetailsHeader">
        <div className="movieDetails-dropdown">
          <span>Overview</span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div className="movieDetails-dropdown">
          <span>Media</span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div className="movieDetails-dropdown">
          <span>Fandom</span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div className="movieDetails-dropdown">
          <span>Share</span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </div> */}
      <div
        className="movieDetailsBody"
        style={{
          backgroundImage: `url("${base_url}${singlePopularMoviesShows?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 200px center",
        }}
      >
        <div className="movieDetailsBackground">
          <div className="movieDetailsData">
            <img
              src={`${base_url}${singlePopularMoviesShows?.poster_path}`}
              alt=""
              className="movieDetailsImage"
            />
            <div className="movieDetailsRight">
              <h1 className="movieNameTitle">
                {singlePopularMoviesShows?.title ||
                  singlePopularMoviesShows?.name ||
                  singlePopularMoviesShows?.original_name}
                <span>
                  (
                  {moment(
                    singlePopularMoviesShows?.release_date ||
                      singlePopularMoviesShows?.first_air_date
                  ).format("YYYY")}
                  )
                </span>
              </h1>
              <div className="movieReleaseDate">
                <span>
                  {moment(
                    singlePopularMoviesShows?.release_date ||
                      singlePopularMoviesShows?.first_air_date
                  ).format("DD/MM/YYYY")}
                  {/*(
                       {singlePopularMoviesShows &&
                        singlePopularMoviesShows.origin_country.map(
                          (item, key) => <div>{item}</div>
                        )}
                      ) */}
                </span>
                <span className="movieDote">.</span>
                <span className="movieGenres">
                  {singlePopularMoviesShows?.genres.map((item, key) => (
                    <div>{item.name}, </div>
                  ))}
                </span>
                <span className="movieDote">.</span>
                <span>
                  {moment(singlePopularMoviesShows?.runtime).format("HH:MM")}
                </span>
              </div>
              <div className="movieDetails-rating">
                <div className="movieDetails-avrage">
                  <small>
                    78<sup>%</sup>
                  </small>
                  <span>
                    User <br /> Score
                  </span>
                </div>
                <div className="movieDetails-icon">
                  <i class="fa fa-list-ul" aria-hidden="true"></i>
                </div>
                <div className="movieDetails-icon">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className="movieDetails-icon">
                  <i class="fa fa-bookmark" aria-hidden="true"></i>
                </div>
                <div className="movieDetails-icon">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="movieDetails-play">
                  <i class="fa fa-play" aria-hidden="true"></i>
                  <span>Play Trailer</span>
                </div>
              </div>
              <h4 className="movieDetails-italic">
                {singlePopularMoviesShows?.tagline}
              </h4>
              <h3 className="movieDetails-overview">Overview</h3>
              <p className="movieDetails-para">
                {singlePopularMoviesShows?.overview}
              </p>
              {/* <div className="overview-wrapper">
                    {singlePopularMoviesShows &&
                      singlePopularMoviesShows.created_by.map((item, key) => (
                        <div key={key}>
                          <h3 className="movieDetails-overview">{item.name}</h3>
                          <p>Creator</p>
                        </div>
                      ))}
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
