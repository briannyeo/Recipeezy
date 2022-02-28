import React, { useState, useContext } from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../SearchResultsPage/SearchResultsPage";

const Home = () => {
  //window.localStorage.setItem("a", 1);
  // const [searchData, setSearchData] = useState();
  return (
    // <SearchContext.Provider value={searchData}>
    <div className="searchBar">
      <SearchBar />
      {/* <SearchResults searchData={searchData} setSearchData={setSearchData} /> */}
    </div>
    // </SearchContext.Provider>
  );
};

export default Home;
