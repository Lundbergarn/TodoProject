import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import TodoList from './components/TodoList';
import Navbar from './components/Navbar';


function App() {
  const [selectedList, setSelectedList] = useState('Home')
  console.log(selectedList)
  return (
    <div className="App">
      <Container>
        <Navbar selectList={setSelectedList}/>
        <TodoList selectedList={selectedList}/>
      </Container>
    </div>
  );
}

export default App;
