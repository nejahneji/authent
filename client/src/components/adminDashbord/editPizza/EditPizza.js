import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editFood, getFood } from '../../../redux/actions/foodActions';

const EditPizza = ({pizza}) => {
    const dispatch = useDispatch();
  const [FoodName, setFoodName] = useState(pizza.foodName);
  const [description, setDescription] = useState(pizza.description);
  const [capacity, setCapacity] = useState(pizza.capacity);
  const [price, setPrice] = useState(pizza.price);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
           <i class="fas fa-tools fa-2x " onClick={handleShow} ></i>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>EDIT PIZZA</Modal.Title>
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
              dispatch(editFood(pizza._id,FoodName,description,capacity,price));
              dispatch(getFood());
              handleClose();
            }}
          >
            Edit PIZZA
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EditPizza
