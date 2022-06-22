import React from "react";
import { useState } from "react";
import Sort from "../../components/sort/Sort";
import Filter from "../../components/filter/Filter";
import WhereToWatch from "../../components/whereToWatch/WhereToWatch";

const PopularMoviesLeft = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [whereToWatchOpen, setWhereToWatchOpen] = useState(false);

  return (
    <div className="popularMoviesLeft">
      <div className="popularMoviesCard">
        <div className="cardHeaderTitle" onClick={() => setSortOpen(!sortOpen)}>
          <span>Sort</span>
          {sortOpen ? (
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          )}
        </div>
        {sortOpen && <Sort />}
      </div>
      <div className="popularMoviesCard">
        <div
          className="cardHeaderTitle"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <span>Filter</span>
          {filterOpen ? (
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          )}
        </div>
        {filterOpen && <Filter />}
      </div>
      <div className="popularMoviesCard">
        <div
          className="cardHeaderTitle"
          onClick={() => setWhereToWatchOpen(!whereToWatchOpen)}
        >
          <span>Where to Watch</span>
          {whereToWatchOpen ? (
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          )}
        </div>
        {whereToWatchOpen && <WhereToWatch />}
      </div>
    </div>
  );
};

export default PopularMoviesLeft;
