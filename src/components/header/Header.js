import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { Add, Search, Notifications } from "@material-ui/icons";
import { MovieItems, TvItems, PeopleItems, MoreItems } from "./MenuItems";
import { auth } from "../../firebase";

const Header = () => {
  const [movie, setMovie] = useState(false);
  const [tv, setTv] = useState(false);
  const [people, setPeople] = useState(false);
  const [more, setMore] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("user-login"));

  const movieEnter = () => setMovie(true);
  const movieLeave = () => setMovie(false);
  const tvEnter = () => setTv(true);
  const tvLeave = () => setTv(false);
  const peopleEnter = () => setPeople(true);
  const peopleLeave = () => setPeople(false);
  const moreEnter = () => setMore(true);
  const moreLeave = () => setMore(false);

  const onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

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
            <span className="navLink">Movies</span>
            {movie && (
              <ul className="MovieDropdown">
                {MovieItems.map((item, key) => (
                  <li className="dropdownItem" key={key}>
                    <Link to={item.to} className={item.cName}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="navItem" onMouseEnter={tvEnter} onMouseLeave={tvLeave}>
            <span className="navLink">TV Shows</span>
            {tv && (
              <ul className="MovieDropdown">
                {TvItems.map((item, key) => (
                  <li className="dropdownItem" key={key}>
                    <Link to={item.to} className={item.cName}>
                      {item.title}
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
            <span className="navLink">People</span>
            {people && (
              <ul className="MovieDropdown">
                {PeopleItems.map((item, key) => (
                  <li className="dropdownItem" key={key}>
                    <Link to={item.to} className={item.cName}>
                      {item.title}
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
            <span className="navLink">More</span>
            {more && (
              <ul className="MovieDropdown">
                {MoreItems.map((item, key) => (
                  <li className="dropdownItem" key={key}>
                    <Link to={item.to} className={item.cName}>
                      {item.title}
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
        {userDetails ? (
          <>
            <Notifications className="headerRightIcon" />
            <Avatar src={userDetails.photoURL} className="headerRightAvatar" />
            <div className="header-logout" onClick={onLogout}>
              <h4>Logout</h4>
            </div>
          </>
        ) : (
          <>
            <Link className="headerRight-link" to="/login">
              Login
            </Link>
            <Link className="headerRight-link" to="/register">
              Join TMDB
            </Link>
          </>
        )}

        <Search className="headerRightIcon" />
      </div>
    </div>
  );
};

export default Header;
