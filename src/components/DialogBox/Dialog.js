import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./Dialog.css";

export default function Dialog(props) {
  //   console.log(props.calories);
  //   console.log(props.ingredientlines);
  const removeDecimal = (dec) => {
    const decStr = dec.toString();
    return decStr.split(".")[0];
  };

  console.log(props.calories);
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
          <li>
            <b>Calories</b> - {removeDecimal(props.calories)} kCal
          </li>
          <li>
            <b>Protein</b> - {removeDecimal(props.protein)} g
          </li>
          <li>
            <b>Fats </b>- {removeDecimal(props.fats)} g
          </li>
          <li>
            <b>Carbs </b>- {removeDecimal(props.carbs)} g
          </li>
        </ul>
        <h4>Ingredients:</h4>
        {props.ingredientlines.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </Modal.Body>
      <Modal.Footer className="modal-footer">
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
      </Modal.Footer>
    </Modal>
  );
}
