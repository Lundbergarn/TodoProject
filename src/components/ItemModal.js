import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const ItemModal = (props) => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState('Välj lista');
  const [modal, setModal] = useState(false);

  function toggle() {
    setModal(!modal);
  }

  function onChange(e, state) {
    state(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (props.title === 'Add new list') {
      props.addItem(todo, list);
      setTodo('');
      toggle();
    }
    if (list === 'Välj lista' || todo === '') return;
    props.addItem(todo, list);
    setTodo('');
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
                value={todo}
                placeholder={props.title}
                onChange={(e) => onChange(e, setTodo)}
              ></Input>

            </FormGroup>

            {props.option === "true" ?
              <FormGroup>
                <Label for="exampleSelect">Select List</Label>
                <Input
                  onChange={(e) => onChange(e, setList)}
                  type="select"
                  name="select"
                  id="exampleSelect"
                >
                  <option>Välj lista</option>
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
