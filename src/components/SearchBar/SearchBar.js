import React, { useState, useEffect, useContext } from "react";
import "./SearchBar.css";
import axios from "axios";
import searchIcon from "../../images/searchicon.png";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const [recipeWord, setRecipeWord] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = () => {
    if (searchWord !== "") {
      setRecipeWord(searchWord);
    } else return;
  };

  const appId = "e07457e3";
  const appKey = "126c04352c3086f78d428c7ce21556d0";

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeWord}&app_id=${appId}&app_key=${appKey}`
      )
      .then((res) => {
        props.setSearchData(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeWord]);

  return (
    <div className="searchForm">
      <input
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        placeholder="Search for Recipes"
      />
      <button type="submit" onClick={handleSubmit}>
        <Link to="/results">
          <img className="searchiconimg" src={searchIcon} alt="search" />
        </Link>
      </button>
    </div>
  );
};

export default SearchBar;
