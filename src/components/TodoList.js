import React, { useState } from 'react';
import { Container, ListGroup, Button, FormGroup } from 'react-bootstrap';
import { Input, Form, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

import './styles.css';

const TodoList = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Buy eggs' },
    { id: uuid(), text: 'Pay bills' },
    { id: uuid(), text: 'Invite friends over' },
    { id: uuid(), text: 'Fix the TV' },
  ]);

  const [openUpdateText, setOpenUpdateText] = useState('');



  function addItem() {
    const text = prompt('Enter some text');
    if (text) {
      setItems(items => [...items, { id: uuid(), text }]);
    }
  }

  function removeItem(id) {
    setItems(items =>
      items.filter(item => item.id !== id)
    )
  }

  function openUpdate(id) {
    if (openUpdateText === '') {
      setOpenUpdateText(id);
    } else setOpenUpdateText('')
  }

  function updateTodo(id, input) {
    let updates = items.map(item => {
      if(item.id === id) {
        item.text = input;
      }
      return item;
    });
    setItems([...updates]);
  }


  return (
    <div style={{ margin: '2rem auto'}}>
      <ListGroup style={{ marginBottom: '1rem' }}>
        <TransitionGroup className="todo-list" component={null}>
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="item"
            >
              <ListGroup.Item>
                <Button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(id)}
                >
                  &times;
                </Button>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => openUpdate(id)}
                >
                 0
                </Button>
                <span style={{padding: "0 20px", width: "100%", lineHeight: "2.4rem"}}>{text}</span>

                {openUpdateText === id ? 
                <Form>
                  <Input
                    type="text"
                    name="todo"
                    placeholder="Update todo"
                    onChange={(e) => updateTodo(id, e.target.value)}
                  ></Input>
                </Form> : null}
                
              </ListGroup.Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
      <Button
        onClick={() => addItem()}
      >
        Add Item
      </Button>
    </div>
  );
}

export default TodoList;
