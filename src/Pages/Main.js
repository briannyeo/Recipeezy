import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.css";

import Home from "./HomePage/Home";
import About from "./AboutPage/About";

import PlannedMeals from "./PlannedMealsPage/PlannedMeals";
import GroceryList from "./GroceryListPage/GroceryList";
import SearchResults from "./SearchResultsPage/SearchResultsPage";
import RecipeDetails from "./RecipeDetailsPage/RecipeDetails";
import NoMatch from "./NoMatchPage";

import SearchBarBS from "../components/SearchBar/SearchBarBS";

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="Recipeezy" element={<Home />}>
          <Route index element={<SearchBarBS />} />
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
