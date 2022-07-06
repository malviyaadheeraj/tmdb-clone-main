import React, { useEffect } from "react";
import "./MovieDetails.scss";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePopularTv } from "../../redux/homeAction";

const TvDetails = ({ match }) => {
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
          backgroundImage: `url("${base_url}${singlePopularTvShows?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 200px center",
        }}
      >
        <div className="movieDetailsBackground">
          <div className="movieDetailsData">
            <img
              src={`${base_url}${singlePopularTvShows?.poster_path}`}
              alt=""
              className="movieDetailsImage"
            />
            <div className="movieDetailsRight">
              <h1 className="movieNameTitle">
                {singlePopularTvShows?.title ||
                  singlePopularTvShows?.name ||
                  singlePopularTvShows?.original_name}
                <span>
                  (
                  {moment(
                    singlePopularTvShows?.release_date ||
                      singlePopularTvShows?.first_air_date
                  ).format("YYYY")}
                  )
                </span>
              </h1>
              <div className="movieReleaseDate">
                <span>
                  {moment(
                    singlePopularTvShows?.release_date ||
                      singlePopularTvShows?.first_air_date
                  ).format("DD/MM/YYYY")}
                  (
                  {singlePopularTvShows?.origin_country?.map((item, key) => (
                    <div>{item}</div>
                  ))}
                  )
                </span>
                <span className="movieDote">.</span>
                <span className="movieGenres">
                  {singlePopularTvShows?.genres?.map((item, key) => (
                    <div>{item.name}, </div>
                  ))}
                </span>
                <span className="movieDote">.</span>
                <span>
                  {singlePopularTvShows?.episode_run_time?.map((item, key) => (
                    <div>{item}m</div>
                  ))}
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
                {singlePopularTvShows?.tagline}
              </h4>
              <h3 className="movieDetails-overview">Overview</h3>
              <p className="movieDetails-para">
                {singlePopularTvShows?.overview}
              </p>
              <div className="overview-wrapper">
                {singlePopularTvShows?.created_by?.map((item, key) => (
                  <div className="overviewItem-wrapper" key={key}>
                    <h3 className="movieDetails-overview">{item.name}</h3>
                    <p>Creator</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvDetails;
