import { Card, Button } from "react-bootstrap";
import React from "react";
import { useOutletContext } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function RecipeCardBS(props) {
  //ADD RECIPE TO PLANNEDMEALS STATE
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();

  const handleAdd = (item) => {
    setPlannedRecipes([...plannedRecipes, item]);
    console.log(plannedRecipes);
  };
  const handleRemove = (item) => {
    console.log("item: ", item);
    const filteredRecipes = plannedRecipes.filter((e) => {
      //console.log("e", e);
      return e.id !== item;
    });

    setPlannedRecipes(filteredRecipes);
    //console.log(plannedRecipes);
  };

  const handleAddRecipe = () => {
    handleAdd({
      id: props.id,
      title: props.title,
      url: props.url,
      ingredients: props.ingredients,
      quantity: props.quantity,
      measure: props.measure,
      protein: props.protein,
      fats: props.fats,
      carbs: props.carbs,
      calories: props.calories,
      ingredientLines: props.ingredientLines,
      instructions: props.instructions,
    });
  };

  const handleRemoveRecipe = () => {
    handleRemove(props.id);
  };

  //HANDLE DIALOG BOX
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      {props.title ? (
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.url} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>text</Card.Text>
            <Button variant="secondary" onClick={handleRemoveRecipe}>
              Remove
            </Button>
            <Button variant="primary" onClick={handleAddRecipe}>
              Add
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <div></div>
      )}
    </>
  );
}
