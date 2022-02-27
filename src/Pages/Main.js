import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./HomePage/Home";
import About from "./AboutPage/About";

import PlannedMeals from "./PlannedMealsPage/PlannedMeals";
import GroceryList from "./GroceryListPage/GroceryList";
import SearchResults from "./SearchResultsPage/SearchResultsPage";
import SearchDetails from "./SearchResultsPage/SearchDetails";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/Recipeezy" element={<Home />} />
        <Route path="grocerylist" element={<GroceryList />} />
        <Route path="plannedmeals" element={<PlannedMeals />} />
        <Route path="about" element={<About />} />
        <Route path="results" element={<SearchResults />} />
        <Route path="results/:id" element={<SearchDetails />} />
      </Routes>
    </main>
  );
}

export default Main;
