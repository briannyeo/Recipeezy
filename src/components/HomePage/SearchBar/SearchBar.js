import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <form className="searchForm">
      <input type="text" placeholder="Search for Recipes" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
