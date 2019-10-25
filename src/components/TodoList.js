import React, { useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
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

  return (
    <div style={{ margin: '2rem auto', maxWidth: '500px' }}>
      <ListGroup style={{ marginBottom: '1rem' }}>
        <TransitionGroup className="todo-list">
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
                {text}
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
