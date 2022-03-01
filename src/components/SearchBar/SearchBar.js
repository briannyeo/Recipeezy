import React, { useState } from "react";
import "./SearchBar.css";
import searchIcon from "../../images/searchicon.png";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState("");
  // const [searchParam, setSearchParam] = useSearchParams("");

  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   console.log(searchParam);
  //   setSearchParam({ q: searchWord });
  // };

  return (
    <div className="searchForm">
      <input
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        placeholder="Search for Recipes"
      />
      <Link to={`results/${searchWord}`}>
        <button type="submit">
          <img className="searchiconimg" src={searchIcon} alt="search" />
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
