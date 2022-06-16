import React from "react";
import "./Search.scss";
import { Clear, SearchOutlined, Info } from "@material-ui/icons";

const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-input-wrapper">
        <div className="search-button">
          <SearchOutlined />
          <input type="text" className="search-input" value="Thor" />
        </div>
        <Clear className="clear-icon" />
      </div>
      <div className="searchBody-wrapper">
        <div className="searchBody-leftWrapper">
          <div className="searchBody-left">
            <h3 className="left-heading">Search Results</h3>
            <div className="leftBody-items">
              <div className="leftBody-item">
                <h3 className="leftBody-title">TV Shows</h3>
                <h4 className="leftBody-itemValue">1</h4>
              </div>
              <div className="leftBody-item">
                <h3 className="leftBody-title">Movies</h3>
                <h4 className="leftBody-itemValue">1</h4>
              </div>
              <div className="leftBody-item">
                <h3 className="leftBody-title">People</h3>
                <h4 className="leftBody-itemValue">1</h4>
              </div>
              <div className="leftBody-item">
                <h3 className="leftBody-title">Collection</h3>
                <h4 className="leftBody-itemValue">1</h4>
              </div>
              <div className="leftBody-item">
                <h3 className="leftBody-title">Companies</h3>
                <h4 className="leftBody-itemValue">1</h4>
              </div>
              <div className="leftBody-item">
                <h3 className="leftBody-title">Keywords</h3>
                <h4 className="leftBody-itemValue">1</h4>
              </div>
              <div className="leftBody-item">
                <h3 className="leftBody-title">Networks</h3>
                <h4 className="leftBody-itemValue">1</h4>
              </div>
            </div>
          </div>
          <p className="leftBody-para">
            <Info className="infoIcon" />
            Tip: You can use the 'y:' filter to narrow your results by year.
            Example: 'star wars y:1977'.
          </p>
        </div>

        <div className="searchBody-right">
          <div className="bodyRight-image">
            <img
              src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/cdkyMYdu8ao26XOBvilNzLneUg1.jpg"
              alt=""
            />
          </div>
          <div className="bodyRight-info">
            <h3 className="bodyRight-title">Ms. Marvel</h3>
            <h4 className="bodyRight-date">8 June 2022</h4>
            <p className="bodyRight-para">
              A great student, avid gamer, and voracious fan-fic scribe, Kamala
              Khan has a special affinity for superheroes, particularly Captain
              Marvel. However, she struggles to fit in at home and at school —
              that is, until she gets superpowers like the heroes she’s always
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
