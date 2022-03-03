import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import ScrollDialog from "../../Pages/RecipeDetailsPage/RecipeDetails";

export default function RecipeCardMUI(props) {
  //console.log(window.localStorage.getItem("a"));

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

  const handleRemoveRecipe = () => {
    handleRemove(props.id);
  };

  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        {props.title ? (
          <>
            <CardMedia
              // onClick={handleShow}
              component="img"
              height="300"
              width="300"
              image={props.url}
              alt="food"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title || null}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions className="btndiv">
              <Button
                onClick={handleRemoveRecipe}
                className="removebtn"
                size="small"
              >
                Remove
              </Button>
              <Button onClick={handleAddRecipe} className="addbtn" size="small">
                Add
              </Button>
            </CardActions>
          </>
        ) : (
          <div></div>
        )}
      </Card>
      <ScrollDialog
        image={props.url}
        title={props.title}
        ingredients={props.ingredients}
        quantity={props.quantity}
        measure={props.measure}
        protein={props.protein}
        fats={props.fats}
        carbs={props.carbs}
        calories={props.calories}
        instructions={props.instructions}
        ingredientLines={props.ingredientLines}
      />
    </>
  );
}
