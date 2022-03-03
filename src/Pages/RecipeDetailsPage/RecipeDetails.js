import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const {
    image,
    title,
    ingredients,
    quantity,
    measure,
    protein,
    fats,
    carbs,
    calories,
    instructions,
  } = props;

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

  const ingredientMeasurements = [{ quantity }, { measure }, { ingredients }];
  // console.log("quantity :" + quantity); //quantity :2,8,16
  // console.log("measure : " + measure); //bunch,tablespoon,ounce
  // console.log("ingredients: " + ingredients); //scallions,butter,fish filets
  // console.log("ingredientMeasurements: " + ingredientMeasurements); //[object Object],[object Object],[object Object]

  return (
    <div>
      <Button onClick={handleClickOpen("paper")}>scroll=paper</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <img src={image}></img>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Ingredients:
            {ingredientMeasurements.map((e) => {
              //console.log(e);
              return `${e.quantity} +++ ${e.measure} +++ ${e.ingredients} `;
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
