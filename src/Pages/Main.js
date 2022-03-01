import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./HomePage/Home";
import About from "./AboutPage/About";

import PlannedMeals from "./PlannedMealsPage/PlannedMeals";
import GroceryList from "./GroceryListPage/GroceryList";
import SearchResults from "./SearchResultsPage/SearchResultsPage";
import RecipeDetails from "./RecipeDetailsPage/RecipeDetails";
import NoMatch from "./NoMatchPage";
import SearchBar from "../components/SearchBar/SearchBar";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="Recipeezy" element={<Home />}>
          <Route index element={<SearchBar />} />
          <Route path="grocerylist" element={<GroceryList />} />
          <Route path="plannedmeals" element={<PlannedMeals />} />
          <Route path="about" element={<About />} />
          <Route path="results" element={<SearchResults />} />
          <Route path="recipe/:recipetitle" element={<RecipeDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
}

export default Main;
