import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RecipeCardMUI(props) {
  const { url, title } = props.searchData;
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="140" image={url} alt="food" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remove </Button>
        <Button size="small">Add</Button>
      </CardActions>
    </Card>
  );
}
