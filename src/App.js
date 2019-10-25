import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        {<h1 style={{textAlign: "center", marginTop: "20px"}}>TodoList</h1>}
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
