import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useOutletContext } from "react-router-dom";
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
      <Card sx={{ maxWidth: 300 }}>
        {props.title ? (
          <>
            <CardMedia
              onClick={handleClickOpen("paper")}
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
                size="large"
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

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <img src={props.url}></img>
          Calories: {props.calories}
          Protein:{props.protein}
          Fats:{props.fats}
          Carbs:{props.carbs}
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Ingredients:{" "}
            {props.ingredientLines.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
            Recipe:{" "}
            <a
              href={props.instructions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn how to cook!
            </a>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
