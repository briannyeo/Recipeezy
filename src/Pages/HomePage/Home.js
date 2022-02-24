import React, { useState } from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  //console.log(searchData[0].recipe.images.REGULAR.url);

  //window.localStorage.setItem("a", 1);

  return (
    <div className="searchBar">
      <SearchBar />
    </div>
  );
};

export default Home;
