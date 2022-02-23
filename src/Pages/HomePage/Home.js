import React, { useState } from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";

const Home = () => {
  const [searchData, setSearchData] = useState();

  return (
    <div>
      <div className="searchBar">
        <SearchBar setSearchData={setSearchData} />
      </div>
      {/* <RecipeCard searchData={searchData} /> */}
      <RecipeCardMUI searchData={searchData} />
    </div>
  );
};

export default Home;
