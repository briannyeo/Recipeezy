import React, { useState, useContext, createContext } from "react";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import "./SearchResultsPage.css";
import key from "weak-key";

const SearchResults = (props) => {
  // const searchData = props.searchData;
  // const setSearchData = props.setSearchData;
  const [searchData, setSearchData] = useState();

  const [addRecipe, setAddRecipe] = useState();
  const [removeRecipe, setRemoveRecipe] = useState();

  console.log(addRecipe);
  //console.log(searchData);

  return (
    <div>
      <SearchBar setSearchData={setSearchData} />
      <>
        {searchData ? (
          <>
            <div className="recipe-container">
              {searchData.map((recipe) => (
                <RecipeCardMUI
                  key={key(recipe)}
                  url={recipe.recipe.images.REGULAR.url}
                  title={recipe.recipe.label}
                  ingredients={recipe.recipe.ingredients.map((e) => e.food)}
                  quantity={recipe.recipe.ingredients.map((e) => e.quantity)}
                  measure={recipe.recipe.ingredients.map((e) => e.measure)}
                  protein={recipe.recipe.totalNutrients.PROCNT.quantity}
                  fats={recipe.recipe.totalNutrients.FAT.quantity}
                  carbs={recipe.recipe.totalNutrients.CHOCDF.quantity}
                  calories={recipe.recipe.totalNutrients.ENERC_KCAL.quantity}
                  instructions={recipe.recipe.url}
                  setAddRecipe={setAddRecipe}
                  setRemoveRecipe={setRemoveRecipe}
                />
              ))}
            </div>
          </>
        ) : (
          <div></div>
        )}
      </>
    </div>
  );
};

export default SearchResults;

// url: res.data.hits[0].recipe.images.REGULAR.url,
// title: res.data.hits[0].recipe.label,
// ingredients: res.data.hits[0].recipe.ingredients.map((e) => e.food),
// quantity: res.data.hits[0].recipe.ingredients.map((e) => e.quantity),
// measure: res.data.hits[0].recipe.ingredients.map((e) => e.measure),
// protein: res.data.hits[0].recipe.totalNutrients.PROCNT.quantity,
// fats: res.data.hits[0].recipe.totalNutrients.FAT.quantity,
// carbs: res.data.hits[0].recipe.totalNutrients.CHOCDF.quantity,
// calories: res.data.hits[0].recipe.totalNutrients.ENERC_KCAL.quantity,
