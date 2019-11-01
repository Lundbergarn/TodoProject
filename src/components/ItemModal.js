import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const ItemModal = (props) => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setList(props.selectedList)
  },[props.selectedList]);
  
  function toggle() {
    setModal(!modal);
  }

  function onChange(e, state) {
    state(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (props.title === 'Add list') {
      props.addItem(todo, list);
      setTodo('');
      toggle();
    }
    if (list === undefined || todo === '') return;
    console.log(todo)
    console.log(list)
    props.addItem(todo, list);
    setTodo('');
    toggle();
  }

  return (
    <div>
      <Button
        color="info"
        style={{ width: '100%' }}
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
                  value={list}
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
