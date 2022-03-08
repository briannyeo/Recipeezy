import React from "react";
import { useOutletContext } from "react-router-dom";

import RecipeCardBSREMOVED from "../../components/RecipeCard/RecipeCardBSRemove";

import key from "weak-key";

const PlannedMeals = () => {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();
  console.log(plannedRecipes);

  return (
    <div className="PlannedMeals">
      {plannedRecipes.map((e) => (
        <RecipeCardBSREMOVED
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
