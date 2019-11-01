import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

function App() {
  const [selectedList, setSelectedList] = useState('');
  const [lists, setLists] = useState([]);
  return (
    <div className="App">
      <Container>
        <Navbar
          selectList={setSelectedList}
          setLists={setLists}
        />
        <TodoList
          selectedList={selectedList}
          lists={lists} 
        />
      </Container>
    </div>
  );
}

export default App;
