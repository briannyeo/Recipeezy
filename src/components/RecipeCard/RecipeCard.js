import React from "react";
import "./RecipeCard.css";

const RecipeCard = (props) => {
  return (
    <div className="recipecard">
      <div className="recipeimage">
        <img src={props.searchData}></img>
      </div>
      <div className="recipetitle">chicken</div>
    </div>
  );
};

export default RecipeCard;
