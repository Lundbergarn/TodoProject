import React, { useState, useEffect } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Input, Form } from 'reactstrap';
import uuid from 'uuid';

import './styles.css';
import InputModal from './ItemModal';

const TodoList = (props) => {
  const [items, setItems] = useState([]);
  const [openUpdateText, setOpenUpdateText] = useState('');
  const [updateValue, setUpdateValue] = useState('');

  // Load todos from localstorage
  useEffect(() => {
    const todos = localStorage.getItem('todo');
    if (todos) {
      setItems(JSON.parse(todos));
    } else {
      setItems([]);
    }
  }, []);

  // useEffect(() => {
  //   const listItems = document.querySelectorAll('.drag-box');
  //   const order = [];
  //   listItems.forEach(todo => {
  //     order.push(todo.attributes._id.nodeValue)
  //   })
  //   console.log(order)
  // });

  // Add a new todo item
  function addItem(text, list) {
    if (text) {
      let input = { id: uuid(), list: list.toLowerCase(), text, checked: '' }
      setItems(items => [...items, input]);
      localStorage.setItem('todo', JSON.stringify([...items, input]));
    }
  }


  // Remove item class and state
  function removeItem(e, id) {
    e.target.classList.remove('remove-transition');
    e.target.closest('button').classList.remove('remove-transition');
    e.stopPropagation();
    setTimeout(() => {
      setItems(items =>
        items.filter(item => item.id !== id)
      )
    }, 500);
  }


  // Handle update state
  function handleUpdateValue(e) {
    setUpdateValue(e.target.value);
  }
  // toggle input element for right todo
  function toggleUpdateInput(e, text, id) {
    e.stopPropagation();
    // if no input is open
    if (openUpdateText === '') {
      setUpdateValue(text)
      setOpenUpdateText(id);
    }
    // close input on same todo item
    else if (openUpdateText === id) {
      setOpenUpdateText('');
      updateItem(id, updateValue);
      setOpenUpdateText('');
      setUpdateValue('');
    }
    else {
      setOpenUpdateText(id);
      setUpdateValue(text)
    }
  }
  // Update item state
  function updateItem(id, input) {
    let updates = items.map(item => {
      if (item.id === id) {
        item.text = input;
      }
      return item;
    });
    setItems([...updates]);
  }
  // handle update submit
  function onUpdateSubmit(e, id) {
    e.preventDefault();
    updateItem(id, updateValue);
    setOpenUpdateText('');
    setUpdateValue('');
  }



  // handle finish state
  function handleCheckbox(id) {
    let updates = items.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems([...updates]);
  }
  // handle finish classlist
  function handleFinished(e, id) {
    e.closest(".list-group-item").classList.toggle("finished")
    handleCheckbox(id)
  }

  return (
    <div style={{ margin: '2rem auto', padding: "0 20px" }}>

      <h2 style={{ textAlign: 'center' }}>{props.selectedList}</h2>

      <ListGroup style={{ marginBottom: '1rem' }}>

        <div className="todo-list drag-container">
          {items.map(({ id, text, checked, list }) => {
            if (props.selectedList.toLowerCase() !== list) {
              return (null);
            }
            return (
              <ListGroup.Item
                key={id}
                className="drag-box"
                dragobj="0"
                _id={id}
                onClick={(e) => handleFinished(e.target, id)}
              >

                <Button
                  className="remove-btn remove-transition"
                  variant="danger"
                  size="sm"
                  onClick={(e) => removeItem(e, id)}
                >
                  <i className="material-icons before-remove remove-transition">delete</i>
                </Button>

                <Button
                  variant="info"
                  size="sm"
                  onClick={(e) => toggleUpdateInput(e, text, id)}
                >
                  <i className="material-icons">edit</i>
                </Button>

                <span style={{ padding: "0 30px", lineHeight: "2.4rem" }}>{text}</span>

                {openUpdateText === id ?
                  <Form
                    className="form"
                    onSubmit={(e) => onUpdateSubmit(e, id)}
                  >
                    <Input
                      value={updateValue}
                      type="text"
                      name="todo"
                      placeholder="Update todo"
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleUpdateValue(e)}
                    ></Input>
                  </Form>

                  : null}

              </ListGroup.Item>
            )
          }
          )}
        </div>

      </ListGroup>

      <InputModal
        addItem={addItem}
        title="Add todo"
        option="true"
        selectedList={props.selectedList}
        lists={props.lists}
      />
    </div>
  );
}

export default TodoList;
