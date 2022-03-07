import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";
import RecipeCardBSPlanned from "../../components/RecipeCard/RecipeCardBSPlanned";
import key from "weak-key";

const PlannedMeals = () => {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();

  return (
    <div className="PlannedMeals">
      {plannedRecipes.map((e) => (
        <RecipeCardBSPlanned
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
