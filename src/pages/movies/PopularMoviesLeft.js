import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const PopularMoviesLeft = () => {
  return (
    <div className="popularMoviesLeft">
      <div className="popularMoviesCard">
        <div className="cardHeaderTitle">
          <span>Sort</span>
          <KeyboardArrowRightIcon />
        </div>
        <div className="cardBody"></div>
      </div>
      <div className="popularMoviesCard">
        <div className="cardHeaderTitle">
          <span>Filter</span>
          <KeyboardArrowRightIcon />
        </div>
        <div className="cardBody"></div>
      </div>
      <div className="popularMoviesCard">
        <div className="cardHeaderTitle">
          <span>Where to Watch</span>
          <KeyboardArrowRightIcon />
        </div>
        <div className="cardBody"></div>
      </div>
    </div>
  );
};

export default PopularMoviesLeft;
