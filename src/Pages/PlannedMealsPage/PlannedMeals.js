import React from "react";
import { useOutletContext } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import RecipeCardBSREMOVED from "../../components/RecipeCard/RecipeCardBSRemove";

import key from "weak-key";

const PlannedMeals = () => {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();
  //console.log(plannedRecipes);

  return (
    <div className="PlannedMeals">
      <div className="cardrow" style={{ position: "relative" }}>
        <Row xs={1} md={3} xl={4} className="justify-content-md-center">
          {plannedRecipes.map((e, index) => (
            <Col key={index}>
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
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PlannedMeals;
