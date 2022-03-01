import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./HomePage/Home";
import About from "./AboutPage/About";

import PlannedMeals from "./PlannedMealsPage/PlannedMeals";
import GroceryList from "./GroceryListPage/GroceryList";
import SearchResults from "./SearchResultsPage/SearchResultsPage";
import RecipeDetails from "./RecipeDetailsPage/RecipeDetails";
import NoMatch from "./NoMatchPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="Recipeezy" element={<Home />} />
        <Route path="Recipeezy/grocerylist" element={<GroceryList />} />
        <Route path="Recipeezy/plannedmeals" element={<PlannedMeals />} />
        <Route path="Recipeezy/about" element={<About />} />
        <Route path="Recipeezy/results/:id" element={<SearchResults />} />
        <Route
          path="Recipeezy/recipe/:recipetitle"
          element={<RecipeDetails />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
}

export default Main;
