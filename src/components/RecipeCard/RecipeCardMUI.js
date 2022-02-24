import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RecipeCardMUI(props) {
  //const { url, title } = props.searchData;
  //console.log(window.localStorage.getItem("a"));

  return (
    <Card sx={{ maxWidth: 300 }}>
      {props.title ? (
        <>
          <CardMedia
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
            <Button className="removebtn" size="small">
              Remove
            </Button>
            <Button className="addbtn" size="small">
              Add
            </Button>
          </CardActions>
        </>
      ) : (
        <div></div>
      )}
    </Card>
  );
}
