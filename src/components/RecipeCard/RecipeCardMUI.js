import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RecipeCardMUI(props) {
  //const { url, title } = props.searchData;

  return (
    <Card sx={{ maxWidth: 300 }}>
      {props.searchData ? (
        <>
          {" "}
          <CardMedia
            component="img"
            height="500"
            image={props.searchData.url}
            alt="food"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.searchData.title || null}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ex? Natus ut similique eius fuga laborum laboriosam porro totam
              quidem adipisci sit, aliquam ratione cum illum, blanditiis quasi
              soluta. Qui.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Remove </Button>
            <Button size="small">Add</Button>
          </CardActions>
        </>
      ) : (
        <div></div>
      )}
    </Card>
  );
}
