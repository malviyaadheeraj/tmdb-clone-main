import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../redux/homeAction";
import "./People.scss";

const People = () => {
  const dispatch = useDispatch();
  const getPeoples = useSelector((state) => state.home.getPeoples);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  console.log(getPeoples);

  return (
    <div className="People">
      <h2>Popular People</h2>
      <div className="peopleWrapper">
        {getPeoples &&
          getPeoples.map((getPeople, key) => (
            <div className="peopleCard" key={key}>
              <img
                src={`${base_url}${getPeople.profile_path}`}
                alt=""
                className="peopleImage"
              />
              <h3 className="peopleName">{getPeople.name}</h3>
              <small className="peopleMovie">
                Popularity {getPeople.popularity}&nbsp;
                {getPeople.known_for_department}
              </small>
            </div>
          ))}
      </div>
      <div className="peopleButton">Load More</div>
    </div>
  );
};

export default People;
