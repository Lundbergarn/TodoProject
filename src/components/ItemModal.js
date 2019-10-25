import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';


const ItemModal = (props) => {
  const [todo, setTodo] = useState('');
  const [modal, setModal] = useState(false);

  function toggle() {
    setModal(!modal);
  }

  function onChange(e) {
    setTodo(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.addItem(todo);
    toggle();
  }

  return (
    <div>
      <Button
        color="dark"
        style={{ marginBottom: '2rem' }}
        onClick={toggle}
      >Add Todo</Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={onChange}
              ></Input>
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
              >Add Item</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ItemModal;
