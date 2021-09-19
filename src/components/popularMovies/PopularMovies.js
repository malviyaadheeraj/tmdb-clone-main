import React, { useState } from "react";
import "./PopularMovies.scss";
import Streaming from "./Streaming";
import OnTv from "./OnTv";
import ForRent from "./ForRent";
import InTheaters from "./InTheaters";

const PopularMovies = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="homePopular">
      <div className="homePopularHeader">
        <h2>What's Popular</h2>
        <div className="homePopularSelector">
          <div
            className={`button ${currentTab === 0 && "button-active"}`}
            onClick={() => setCurrentTab(0)}
          >
            Streaming
          </div>
          <div
            className={`button ${currentTab === 1 && "button-active"}`}
            onClick={() => setCurrentTab(1)}
          >
            On TV
          </div>
          <div
            className={`button ${currentTab === 2 && "button-active"}`}
            onClick={() => setCurrentTab(2)}
          >
            For Rent
          </div>
          <div
            className={`button ${currentTab === 3 && "button-active"}`}
            onClick={() => setCurrentTab(3)}
          >
            In Theaters
          </div>
        </div>
      </div>
      {currentTab === 0 && <Streaming />}
      {/* {currentTab === 1 && <OnTv />}
      {currentTab === 2 && <ForRent />}
      {currentTab === 3 && <InTheaters />} */}
    </div>
  );
};

export default PopularMovies;
