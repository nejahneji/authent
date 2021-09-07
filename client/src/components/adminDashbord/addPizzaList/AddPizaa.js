import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addFood, getFood } from "../../../redux/actions/foodActions";

const AddPizaa = () => {
  const dispatch = useDispatch();
  const [FoodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD PIZZA
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>AddPizaa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="pizzaName"
              type="text"
              className="form-control"
              onChange={(e) => setFoodName(e.target.value)}
              value={FoodName}
            />
            <input
              placeholder="description"
              type="text"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <input
              placeholder="capacity"
              type="text"
              className="form-control"
              onChange={(e) => setCapacity(e.target.value)}
              value={capacity}
            />
            <input
              placeholder="price"
              type="text"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            {/* <input type="file"  /> */}
            <form action="/profile" method="post" enctype="multipart/form-data">
              <input type="file" name="avatar" onChange={(e) => setFile(e.target.files[0])}/>
            </form>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              dispatch(addFood(FoodName, description, capacity, price));
              dispatch(getFood());
              handleClose();
            }}
          >
            ADD PIZZA
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddPizaa;
