import React, { useState } from "react";
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header>
        Prit's Todo list
      </header>
      <Form inputText={inputText} todos={todos} setInputText={setInputText} setTodos={setTodos}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
