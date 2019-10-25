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
        style={{ marginBottom: '2rem', width: "100%" }}
        onClick={toggle}
      >Add Todo</Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Add Todo</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="todo">Todo</Label>
              <Input
                type="todo"
                name="name"
                id="todo"
                placeholder="Add todo"
                onChange={onChange}
              ></Input>
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
              >Add Todo</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ItemModal;
