import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";
import RecipeCardBS from "../../components/RecipeCard/RecipeCardBS";
import key from "weak-key";

const PlannedMeals = () => {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();

  return (
    <div className="PlannedMeals">
      {plannedRecipes.map((e) => (
        <RecipeCardBS
          key={key(e)}
          url={e.url}
          title={e.title}
          id={e.id}
          ingredientLines={e.ingredientLines}
          instructions={e.instructions}
        />
      ))}
    </div>
  );
};

export default PlannedMeals;
