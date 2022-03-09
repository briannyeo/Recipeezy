import React, { useState } from "react";
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
import background from '../images/recipeezyhomepage.jpeg';
import { BackgroundStylesContext } from "../contexts/BackgroundStylesContext";

function Main() {
  const [backgroundStyles, setBackgroundStyles] = useState({
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    background: `url(${background})`,
    backgroundAttachment: 'fixed',
    position: "fixed",
    zIndex: -1,
  });

  return (
    <main
      className="main"
    >
      <BackgroundStylesContext.Provider value={{ backgroundStyles, setBackgroundStyles }} > 
        <div
          style={{...backgroundStyles}}
        />
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
      </BackgroundStylesContext.Provider>
    </main>
  );
}

export default Main;
