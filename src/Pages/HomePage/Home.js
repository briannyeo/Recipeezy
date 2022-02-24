import React, { useState } from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";

const Home = () => {
  const [searchData, setSearchData] = useState();
  //console.log(searchData[0].recipe.images.REGULAR.url);

  return (
    <div className="container">
      <div className="searchBar">
        <SearchBar setSearchData={setSearchData} />
      </div>
      {searchData ? (
        <>
          <div className="recipe-container">
            {searchData.map((e) => (
              <RecipeCardMUI searchData={searchData} />
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
