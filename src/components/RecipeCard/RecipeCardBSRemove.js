import { Card, Button } from "react-bootstrap";
import React from "react";
import { useOutletContext } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dialog from "../DialogBox/Dialog";

import { hover } from "@testing-library/user-event/dist/hover";
import "./RecipeCardBS.css";

export default function RecipeCardBSREMOVED(props) {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();
  const handleRemove = (item) => {
    console.log("item: ", item);
    const filteredRecipes = plannedRecipes.filter((e) => {
      //console.log("e", e);
      return e.id !== item;
    });

    setPlannedRecipes(filteredRecipes);
    console.log(plannedRecipes);
  };

  const handleRemoveRecipe = () => {
    handleRemove(props.id);
  };

  //HANDLE DIALOG BOX
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {props.title ? (
        <Card
          className="recipecard"
          border="light"
          style={{ width: "18rem", margin: "20px", minHeight: "23rem" }}
        >
          <Card.Img
            className="cardimage"
            onClick={() => setModalShow(true)}
            variant="top"
            src={props.url}
          />
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title className="cardtitle">{props.title}</Card.Title>

            <Button className="removebutton" onClick={handleRemoveRecipe}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <div></div>
      )}
      <Dialog
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={props.title}
        instructions={props.instructions}
        calories={props.calories}
        protein={props.protein}
        fats={props.fats}
        carbs={props.carbs}
        ingredientlines={props.ingredientLines}
        img={props.img}
      />
    </>
  );
}
