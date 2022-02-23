import React from "react";
import "./RecipeCard.css";

const RecipeCard = (props) => {
  return (
    <div className="card">
      <div className="recipeimage">
        <img className="image" src={props.searchData} alt="food"></img>
      </div>
      <div className="container">Food Title</div>
    </div>
  );
};

export default RecipeCard;

//const {searchData.url, data}

//const {url, title ...} = props.searchData
