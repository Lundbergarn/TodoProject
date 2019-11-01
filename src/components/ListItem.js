import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Input, Form } from 'reactstrap';

const ListItem = (props) => {

  const { handleFinished, removeItem, toggleUpdateInput, onUpdateSubmit, handleUpdateValue, id, text, updateValue, openUpdateText } = props;

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
  );
}

export default ListItem;
