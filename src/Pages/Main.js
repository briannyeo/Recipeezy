import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./HomePage/Home";
import About from "./AboutPage/About";

import PlannedMeals from "./PlannedMealsPage/PlannedMeals";
import GroceryList from "./GroceryListPage/GroceryList";
import SearchResults from "./SearchResultsPage/SearchResultsPage";
import SearchDetails from "./SearchResultsPage/SearchDetails";
import NoMatch from "./NoMatchPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="grocerylist" element={<GroceryList />} />
        <Route path="plannedmeals" element={<PlannedMeals />} />
        <Route path="about" element={<About />} />
        <Route path="/results/" element={<SearchResults />} />
        <Route path="results/:id" element={<SearchDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
}

export default Main;
