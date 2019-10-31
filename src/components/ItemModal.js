import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

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
        color="info"
        style={{ marginBottom: '2rem', width: '100%' }}
        onClick={toggle}
      >
        {props.title}
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>

            <FormGroup>

              <Label for="todo">Todo</Label>
              <Input
                type="todo"
                name="name"
                id="todo"
                placeholder={props.title}
                onChange={onChange}
              ></Input>

            </FormGroup>

            {props.option === "true" ?
              <FormGroup>
                <Label for="exampleSelect">Select List</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                >
                  {props.lists.map(list => {
                    return (
                      <option key={list.title}>{list.title}</option>
                    )
                  })}
                </Input>
              </FormGroup>

              : null}

            <Button
              color="info"
              style={{ marginTop: '2rem' }}
              block
            >
              {props.title}
            </Button>

          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ItemModal;
