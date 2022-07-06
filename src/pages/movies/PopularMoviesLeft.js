import React from "react";
import { useState } from "react";
import Filter from "../../components/filter/Filter";
import Sort from "../../components/sort/Sort";
import WhereToWatch from "../../components/whereToWatch/WhereToWatch";

const PopularMoviesLeft = () => {
  const [values, setValues] = useState({});
  const [genres, setGenres] = useState("");
  const [selected, setSelected] = useState();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [whereToWatchOpen, setWhereToWatchOpen] = useState(false);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleGenres = (data) => {
    setSelected(data.name);
    setGenres(data.name);
  };

  const searchMovies = () => {};

  return (
    <div className="popularMoviesLeft">
      {/* <div className="popularMoviesCard">
        <div className="cardHeaderTitle" onClick={() => setSortOpen(!sortOpen)}>
          <span>Sort</span>
          {sortOpen ? (
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          )}
        </div>
        {sortOpen && <Sort />}
      </div> */}
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
        {filterOpen && (
          <Filter
            onInputChange={onInputChange}
            handleGenres={handleGenres}
            selected={selected}
          />
        )}
      </div>
      {/* <div className="popularMoviesCard">
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
      </div> */}

      <button className="search-button" onClick={searchMovies}>
        Search
      </button>
    </div>
  );
};

export default PopularMoviesLeft;
