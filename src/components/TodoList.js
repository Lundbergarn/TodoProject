import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Input, Form, CustomInput } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

import './styles.css';

const TodoList = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Buy eggs', checked: '' },
    { id: uuid(), text: 'Pay bills', checked: '' },
    { id: uuid(), text: 'Invite friends over', checked: '' },
    { id: uuid(), text: 'Fix the TV', checked: '' },
  ]);

  const [openUpdateText, setOpenUpdateText] = useState('');
  const [updateValue, setUpdateValue] = useState('');


  function addItem() {
    const text = prompt('Enter some text');
    if (text) {
      setItems(items => [...items, { id: uuid(), text }]);
    }
  }

  function removeItem(e, id) {
    e.stopPropagation();
    setItems(items =>
      items.filter(item => item.id !== id)
    )
  }
  
  function handleUpdateValue(e) {
    setUpdateValue(e.target.value);
  }

  function toggleUpdateInput(e, text, id) {
    e.stopPropagation();
    if (openUpdateText === '') 
    {
      setUpdateValue(text)
      setOpenUpdateText(id);
    }
    else if (openUpdateText === id) 
    {
      setOpenUpdateText('');
      updateItem(id, updateValue);
      setOpenUpdateText('');
      setUpdateValue('');
    }
    else 
    {
      setOpenUpdateText(id);
      setUpdateValue(text)
    }
  }

  function updateItem(id, input) {
    let updates = items.map(item => {
      if(item.id === id) {
        item.text = input;
      }
      return item;
    });
    setItems([...updates]);
  }

  function onUpdateSubmit(e, id) {
    e.preventDefault();
    updateItem(id, updateValue);
    setOpenUpdateText('');
    setUpdateValue('');
  }

  function handleCheckbox(id) {
    let updates = items.map(item => {
      if(item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems([...updates]);
  }
  
  function handleFinished(e, id) {
    e.classList.toggle("finished")
    handleCheckbox(id)
  }

  return (
    <div style={{ margin: '2rem auto'}}>


      <ListGroup  style={{ marginBottom: '1rem' }}>
        <TransitionGroup className="todo-list" component={null}>
          <div className="drag-container">
            {items.map(({ id, text, checked }) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames="item"
              > 
                <ListGroup.Item className="drag-box" dragobj="0" onClick={(e) => handleFinished(e.target, id)}>

                  {/* <CustomInput
                    onChange={() => handleCheckbox(id)}
                    checked={checked}
                    type="checkbox"
                    id={`"finish"${id}`}
                  /> */}
            
                  <Button
                    className="remove-btn"
                    variant="danger"
                    size="sm"
                    onClick={(e) => removeItem(e, id)}
                  >
                    <i className="material-icons">delete</i>
                  </Button>

                  <Button
                    variant="info"
                    size="sm"
                    onClick={(e) => toggleUpdateInput(e, text, id)}
                  >
                  <i className="material-icons">edit</i>
                  </Button>

                  <span style={{padding: "0 30px", lineHeight: "2.4rem"}}>{text}</span>

                  {openUpdateText === id ? 
                  <Form className="form" onSubmit={(e) => onUpdateSubmit(e, id)}>
                    <Input
                      value={updateValue}
                      type="text"
                      name="todo"
                      placeholder="Update todo"
                      onChange={(e) => handleUpdateValue(e)}
                    ></Input>
                  </Form> : null}
                  
                </ListGroup.Item>
              </CSSTransition>
            ))}
          </div>
        </TransitionGroup>
      </ListGroup>
      <Button
        className="btn-success"
        onClick={() => addItem()}
      >
        Add Item
      </Button>
    </div>
  );
}

export default TodoList;
