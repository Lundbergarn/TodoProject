import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ItemModal from './ItemModal';
import uuid from 'uuid';

const NavbarComponent = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    const todoList = localStorage.getItem('todoList');
    if (todoList) {
      setList(JSON.parse(todoList));
    } else {
      setList([]);
    }
  }, [setList]);

  useEffect(() => {
    props.setLists(list)
  }, [collapsed, props, list]);

  function addItem(title) {
    if (title) {
      let input = { id: uuid(), title }
      setList(list => [...list, input]);
      localStorage.setItem('todoList', JSON.stringify([...list, input]))
    }
  }

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand className="mr-auto">Todo List</NavbarBrand>
        <div className="mr-2">
          <ItemModal
            title="Add new list"
            addItem={addItem}
            option="false"
          />
        </div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem style={{ textAlign: "right", marginTop: "20px" }}>
              {list.map(el => {
                return (
                  <NavLink
                    style={{ borderBottom: '1px solid #ccc', marginRight: "10px" }}
                    onClick={(e) => props.selectList(e.target.textContent)}
                    key={el.id}
                  >
                    {el.title}
                  </NavLink>
                )
              })}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;