import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesGenres } from "../../redux/homeAction";

const Filter = ({ onInputChange, handleGenres, selected }) => {
  const dispatch = useDispatch();
  const getMoviesGenresList = useSelector(
    (state) => state.home.getMoviesGenresList
  );

  useEffect(() => {
    dispatch(getMoviesGenres());
  }, []);

  return (
    <div className="cardBody-wrapper">
      {/* <div className="cardBody-showMe">
        <h3 className="cardBody-title">Show Me</h3>
        <div className="cardBody-inputWrapper">
          <input type="radio" id="everything" name="name" />
          <label for="everything">Everything</label>
        </div>
        <div className="cardBody-inputWrapper">
          <input type="radio" id="moviesIHaveNotSeen" name="name" />
          <label for="moviesIHaveNotSeen">Movies I Haven't Seen</label>
        </div>
        <div className="cardBody-inputWrapper">
          <input type="radio" id="moviesIHaveSeen" name="name" />
          <label for="moviesIHaveSeen">Movies I Have Seen</label>
        </div>
      </div>
      <div className="cardBody-availabilities">
        <h3 className="cardBody-title">Availabilities</h3>
        <div className="cardBody-inputWrapper">
          <input type="checkbox" id="availabilities" name="name" />
          <label for="availabilities">Search all availabilities?</label>
        </div>
      </div> */}
      <div className="cardBody-releaseDates">
        <h3 className="cardBody-title">Release Dates</h3>
        <div className="cardBody-inputWrapper">
          <label>From</label>
          <input type="date" onChange={onInputChange} name="fromDate" />
        </div>
        <div className="cardBody-inputWrapper">
          <label>To</label>
          <input type="date" onChange={onInputChange} name="toDate" />
        </div>
      </div>
      <div className="cardBody-genres">
        <h3 className="cardBody-title">Genres</h3>
        <div className="cardBody-inputWrapper">
          {getMoviesGenresList &&
            getMoviesGenresList.map((genres, key) => (
              <>
                {selected === genres.name ? (
                  <span
                    className="selectedGenres"
                    key={key}
                    onClick={() => handleGenres(genres)}
                  >
                    {genres.name}
                  </span>
                ) : (
                  <span
                    className="cardBodyGenres"
                    key={key}
                    onClick={() => handleGenres(genres)}
                  >
                    {genres.name}
                  </span>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
