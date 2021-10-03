import React from "react";
import "./MovieDetails.scss";

const MovieDetails = () => {
  return (
    <div className="movieDetailsWrapper">
      <div className="movieDetailsHeader">HeadermovieDetails</div>
      <div className="movieDetailsBody">
        <div className="movieDetailsBackground">
          <div className="movieDetailsData">
            <img src="assets/luca.jpg" alt="" className="movieDetailsImage" />
            <div className="movieDetailsRight">
              <h1 className="movieNameTitle">
                Free Guy <span>(2021)</span>
              </h1>
              <div className="movieReleaseDate">
                <span>17/09/2021 (IN)</span>
                &nbsp;&nbsp;
                <span className="movieDote">.</span>
                &nbsp;&nbsp;
                <span className="movieGenres">
                  <div>Comedy</div>,<div>Action</div>,<div>Adventure</div>,
                  <div>Science Fiction</div>
                </span>
                &nbsp;&nbsp;
                <span className="movieDote">.</span>
                &nbsp;&nbsp;
                <span>1h 55m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
