import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  // const [recipeWord, setRecipeWord] = useState("chicken");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeWord}&app_id=e07457e3&app_key=126c04352c3086f78d428c7ce21556d0`
  //     )
  //     .then((res) => {
  //       console.log(res.data.hits[0].recipe.images.small.url);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Home;
