import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import uuid from 'uuid';

import './styles_todolist.css';
import InputModal from './ItemModal';
import ListItem from './ListItem';

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
    <div style={{ margin: '1rem auto', padding: "0 20px" }}>

      <h2 style={{ textAlign: 'center' }}>{props.selectedList}</h2>

      <ListGroup style={{ marginBottom: '1rem' }}>

        <div className="todo-list drag-container">
          {items.map(({ id, text, checked, list }) => {
            if (props.selectedList.toLowerCase() !== list) {
              return (null);
            }
            return (
              <ListItem 
                handleFinished = {handleFinished}
                removeItem = {removeItem}
                toggleUpdateInput = {toggleUpdateInput}
                onUpdateSubmit = {onUpdateSubmit}
                handleUpdateValue = {handleUpdateValue}
                openUpdateText = {openUpdateText}
                updateValue = {updateValue}
                id = {id}
                text = {text}
                checked = {checked}
                list = {list}
              /> 
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
