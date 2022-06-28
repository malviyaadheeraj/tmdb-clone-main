import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../redux/homeAction";
import Loading from "../../components/loading/Loading";
import "./People.scss";

const People = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const getPeoples = useSelector((state) => state.home.getPeoples);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    dispatch(getPeople(pageNumber));
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="People">
      <h2>Popular People</h2>
      {loading === true ? (
        <Loading />
      ) : (
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
      )}

      <div className="peopleButton" onClick={handleLoadMore}>
        Load More
      </div>
    </div>
  );
};

export default People;
