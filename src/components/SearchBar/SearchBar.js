import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState("");

  //   const serarchTerm = "chicken"
  //   axios
  //     .get(
  //       `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeWord}&app_id=e07457e3&app_key=126c04352c3086f78d428c7ce21556d0`
  //     )
  // ${searchTerm}.then((res) => {
  //       console.log(re
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <form className="searchForm">
      <input type="text" placeholder="Search for Recipes" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
