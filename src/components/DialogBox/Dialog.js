import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function Dialog(props) {
  //   console.log(props.calories);
  //   console.log(props.ingredientlines);
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
          <li>Calories - {props.calories} kCal</li>
          <li>Protein - {props.protein} g</li>
          <li>Fats - {props.fats} g</li>
          <li>Carbs - {props.carbs} g</li>
        </ul>
        <h4>Ingredients:</h4>
        {props.ingredientlines.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
        <h5>
          For full recipe and instructions, click{" "}
          <a
            href={props.instructions}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleaddrecipe}>Add Recipe</Button>
      </Modal.Footer>
    </Modal>
  );
}
