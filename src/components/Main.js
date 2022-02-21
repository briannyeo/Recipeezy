import React from "react";
import { Route, Routes } from "react-router-dom";
import PlannedMeals from "./PlannedMeals";
import Home from "./HomePage/Home";
import About from "./About";
import GroceryList from "./GroceryList";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="grocerylist" element={<GroceryList />} />
        <Route path="plannedmeals" element={<PlannedMeals />} />
        <Route path="about" element={<About />} />
      </Routes>
    </main>
  );
}

export default Main;
