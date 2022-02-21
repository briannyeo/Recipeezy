import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <form className="searchForm">
      <input type="text" placeholder="Search for Recipes"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;
