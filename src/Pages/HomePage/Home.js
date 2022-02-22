import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [recipeWord, setRecipeWord] = useState("");

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Home;
