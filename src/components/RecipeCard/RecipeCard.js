import React from "react";
import "./RecipeCard.css";

const RecipeCard = (props) => {
  return (
    <div class="card-grid">
      <div class="card">
        <div class="card card-shadow">
          <div class="card-header card-image">
            <img src={props.searchData} />
          </div>
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div class="card-footer">
            <button class="btn">Details</button>
            <button class="btn btn-outline">Contact Seller</button>
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
