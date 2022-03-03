import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";
import key from "weak-key";

const PlannedMeals = () => {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();
  console.log("Planned Meals: " + plannedRecipes);
  return (
    <div className="PlannedMeals">
      {plannedRecipes.map((e) => (
        <div>
          <RecipeCardMUI url={e.url} title={e.title} id={e.id} />
        </div>
      ))}
    </div>
  );
};

export default PlannedMeals;
