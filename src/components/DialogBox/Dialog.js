import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function Dialog(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Macros:</h4>
        <ul>
          <li>Calories - {props.calories}</li>
          <li>Protein - {props.protein}</li>
          <li>Fats - {props.fats}</li>
          <li>Carbs - {props.carbs}</li>
        </ul>
        <h4>Ingredients:</h4>
        {props.ingredientlines.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
        <h4>Learn to cook:</h4>
        <a href={props.instructions} target="_blank" rel="noopener noreferrer">
          Full Recipe
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleaddrecipe}>Add Recipe</Button>
      </Modal.Footer>
    </Modal>
  );
}
