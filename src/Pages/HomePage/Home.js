import React, { useState } from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Home = () => {
  const [searchData, setSearchData] = useState();

  return (
    <div>
      <SearchBar setSearchData={setSearchData} />

      <RecipeCard searchData={searchData} />
    </div>
  );
};

export default Home;
