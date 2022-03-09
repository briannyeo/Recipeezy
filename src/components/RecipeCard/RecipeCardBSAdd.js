import { Card, Button } from "react-bootstrap";
import React from "react";
import { useOutletContext } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dialog from "../DialogBox/Dialog";
import "./RecipeCardBSAdd.css";

export default function RecipeCardBSAdd(props) {
  //ADD RECIPE TO PLANNEDMEALS STATE
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();

  const handleAdd = (item) => {
    setPlannedRecipes([...plannedRecipes, item]);
    //console.log(plannedRecipes);
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

  // const handleRemoveRecipe = () => {
  //   handleRemove(props.id);
  // };

  //HANDLE DIALOG BOX
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {props.title ? (
        <Card
          className="recipecard"
          border="light"
          style={{ width: "18rem", margin: "20px" }}
        >
          <Card.Img
            className="cardimage"
            onClick={() => setModalShow(true)}
            variant="top"
            src={props.url}
          />
          <Card.Body>
            <Card.Title className="cardtitle">{props.title}</Card.Title>

            <Button className="addbutton" onClick={handleAddRecipe}>
              Add
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
        handleaddrecipe={handleAddRecipe}
      />
    </>
  );
}
