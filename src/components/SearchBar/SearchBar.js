import React, { useState } from "react";
import "./SearchBar.css";
import searchIcon from "../../images/searchicon.png";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/Recipeezy/results?search=${searchWord}`);
  };

  return (
    <div className="searchForm">
      <input
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        placeholder="Search for Recipes"
      />

      <button onClick={handleSubmit} type="submit">
        <img className="searchiconimg" src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default SearchBar;
