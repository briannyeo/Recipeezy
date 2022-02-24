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
            {/* {searchData.map((e) => (
              <RecipeCardMUI
                url={e.recipe.images.REGULAR.url}
                title={e.recipe.label}
              />
            ))} */}
            {searchData.map((e) => (
              <RecipeCard
                url={e.recipe.images.REGULAR.url}
                title={e.recipe.label}
              />
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
