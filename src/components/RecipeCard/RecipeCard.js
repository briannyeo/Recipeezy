import { toUnitless } from "@mui/material/styles/cssUtils";
import React from "react";
import "./RecipeCard.css";

const RecipeCard = (props) => {
  return (
    <div class="card-grid">
      <div class="card">
        <div class="card card-shadow">
          <div class="card-header card-image">
            <img src={props.url} />
          </div>
          <div class="card-header">{props.title}</div>
          <div class="card-footer">
            <button class="btn">Remove</button>
            <button class="btn btn-outline">Add</button>
          </div>
        </div>
      </div>
    </div>
    // <div className="card">
    //   <div className="cardbody">
    //     <img src={props.searchData} alt="food"></img>
    //     <h2 className="cardtitle">Card Title</h2>
    //   </div>
    //   <button className="addtoplanned">Add to Planned</button>
    //   <button className="removefromplanned">Remove from Planned</button>
    // </div>
  );
};

export default RecipeCard;

//const {searchData.url, data}

//const {url, title ...} = props.searchData
