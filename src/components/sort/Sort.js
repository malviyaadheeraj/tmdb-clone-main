import React from "react";

const Sort = () => {
  return (
    <div className="cardBody-wrapper">
      <div className="cardBody-sort">
        <h3 className="cardBody-title">Sort Results By</h3>
        <select className="cardBody-select">
          <option value="Popularity Descending">Popularity Descending</option>
          <option value="Popularity Ascending">Popularity Ascending</option>
          <option value="Rating Descending">Rating Descending</option>
          <option value="Rating Ascending">Rating Ascending</option>
          <option value="Release Date Descending">
            Release Date Descending
          </option>
          <option value="Release Date Ascending">Release Date Ascending</option>
          <option value="Title (A-Z)">Title (A-Z)</option>
          <option value="Title (Z-A)">Title (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
