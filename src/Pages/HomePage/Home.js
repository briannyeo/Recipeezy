import React, { useState } from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";

const Home = () => {
  const [searchData, setSearchData] = useState();

  return (
    <div className="container">
      <div className="searchBar">
        <SearchBar setSearchData={setSearchData} />
      </div>
      <div className="recipe-container">
        <RecipeCardMUI searchData={searchData} />
      </div>
    </div>
  );
};

export default Home;
