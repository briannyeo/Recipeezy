import React, { useState } from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [plannedRecipes, setPlannedRecipes] = useState([]);
  return <Outlet context={[plannedRecipes, setPlannedRecipes]} />;
};

export default Home;
