import { Tooltip } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSinglePopularTv } from "../../redux/homeAction";
import "./MovieDetails.scss";

const MovieDetails = ({ match }) => {
  const dispatch = useDispatch();
  const singlePopularTvShows = useSelector(
    (state) => state.home.singlePopularTvShows
  );
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const data = {
      id: match.params.id,
    };
    dispatch(getSinglePopularTv(data));
  }, []);

  return (
    <div className="movieDetailsWrapper">
      <div className="movieDetailsHeader">
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
      </div>
      <div
        className="movieDetailsBody"
        style={{
          backgroundImage: `url("${base_url}${
            singlePopularTvShows && singlePopularTvShows.backdrop_path
          }")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 200px center",
        }}
      >
        <div className="movieDetailsBackground">
          <div className="movieDetailsData">
            <img
              src={`${base_url}${
                singlePopularTvShows && singlePopularTvShows.poster_path
              }`}
              alt=""
              className="movieDetailsImage"
            />
            <div className="movieDetailsRight">
              <h1 className="movieNameTitle">
                {singlePopularTvShows && singlePopularTvShows.name}{" "}
                <span>(2021)</span>
              </h1>
              <div className="movieReleaseDate">
                <span>17/09/2021 (IN)</span>
                <span className="movieDote">.</span>
                <span className="movieGenres">
                  <div>Comedy</div>,<div>Action</div>,<div>Adventure</div>,
                  <div>Science Fiction</div>
                </span>
                <span className="movieDote">.</span>
                <span>1h 55m</span>
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
                45.6 billion won is child's play.
              </h4>
              <h3 className="movieDetails-overview">Overview</h3>
              <p className="movieDetails-para">
                {singlePopularTvShows && singlePopularTvShows.overview}
              </p>
              <h3 className="movieDetails-overview">Hwang Dong-hyuk</h3>
              <p>Creator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
