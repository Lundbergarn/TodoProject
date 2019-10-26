import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ItemModal from './ItemModal';
import uuid from 'uuid';

const NavbarComponent = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [list, setList] = useState([{id: 1, title: 'Home'}, {id: 2, title: 'Work'}]);

  function addItem(title) {
    if (title) {
      setList(items => [...items, { id: uuid(), title }]);
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
          />
        </div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem style={{textAlign: "right", marginTop: "20px"}}>
              {list.map(el => {
                return (
                  <NavLink
                  style={{borderBottom: '1px solid #ccc', marginRight: "10px"}}
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