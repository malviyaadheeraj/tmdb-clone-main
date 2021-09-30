import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { Add, Search, Notifications } from "@material-ui/icons";
import { MovieItems, TvItems, PeopleItems, MoreItems } from "./MenuItems";

const Header = () => {
  const [movie, setMovie] = useState(false);
  const [tv, setTv] = useState(false);
  const [people, setPeople] = useState(false);
  const [more, setMore] = useState(false);

  const movieEnter = () => setMovie(true);
  const movieLeave = () => setMovie(false);
  const tvEnter = () => setTv(true);
  const tvLeave = () => setTv(false);
  const peopleEnter = () => setPeople(true);
  const peopleLeave = () => setPeople(false);
  const moreEnter = () => setMore(true);
  const moreLeave = () => setMore(false);

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img src="/assets/tmdblogo.svg" alt="" className="navbarBrand" />
        </Link>
        <ul className="navbarNav">
          <li
            className="navItem"
            onMouseEnter={movieEnter}
            onMouseLeave={movieLeave}
          >
            <Link to="/" className="navLink">
              Movies
            </Link>
            {movie && (
              <ul className="MovieDropdown">
                {MovieItems.map((movieitem) => (
                  <li className="dropdownItem" key={movieitem.id}>
                    <Link to={movieitem.to} className={movieitem.cName}>
                      {movieitem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="navItem" onMouseEnter={tvEnter} onMouseLeave={tvLeave}>
            <Link to="/" className="navLink">
              TV Shows
            </Link>
            {tv && (
              <ul className="MovieDropdown">
                {TvItems.map((tvitem) => (
                  <li className="dropdownItem" key={tvitem.id}>
                    <Link to={tvitem.to} className={tvitem.cName}>
                      {tvitem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className="navItem"
            onMouseEnter={peopleEnter}
            onMouseLeave={peopleLeave}
          >
            <Link to="/" className="navLink">
              People
            </Link>
            {people && (
              <ul className="MovieDropdown">
                {PeopleItems.map((peopleitem) => (
                  <li className="dropdownItem" key={peopleitem.id}>
                    <Link to={peopleitem.to} className={peopleitem.cName}>
                      {peopleitem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className="navItem"
            onMouseEnter={moreEnter}
            onMouseLeave={moreLeave}
          >
            <Link to="/" className="navLink">
              More
            </Link>
            {more && (
              <ul className="MovieDropdown">
                {MoreItems.map((moreitem) => (
                  <li className="dropdownItem" key={moreitem.id}>
                    <Link to={moreitem.to} className={moreitem.cName}>
                      {moreitem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="headerRight">
        <Add className="headerRightIcon" />
        <Notifications className="headerRightIcon" />
        <Avatar className="headerRightAvatar" />
        <Search className="headerRightIcon" />
      </div>
    </div>
  );
};

export default Header;
