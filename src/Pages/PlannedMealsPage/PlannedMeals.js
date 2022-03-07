import React from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCardMUI from "../../components/RecipeCard/RecipeCardMUI";
import RecipeCardBSPlanned from "../../components/RecipeCard/RecipeCardBSPlanned";
import RecipeCardBS from "../../components/RecipeCard/RecipeCardBS";
import key from "weak-key";
import { propTypes } from "react-bootstrap/esm/Image";

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
          protein={e.protein}
          fats={e.fats}
          carbs={e.carbs}
          calories={e.calories}
        />
      ))}
    </div>
  );
};

export default PlannedMeals;
