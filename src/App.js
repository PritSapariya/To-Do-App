import React, { useState, useEffect } from "react";
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {


  // useState declaration
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFileterTodos] = useState([]);

  console.log(filterTodos);

  // useEffect declaration
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterTodoHandler(status);
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterTodoHandler = status => {
    switch (status) {
      case 'completed': 
        setFileterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': 
        setFileterTodos(todos.filter(todo => todo.completed === false));
        break;
      case 'all':
        setFileterTodos(todos);
        break;
      default:
        break;
    };
  };

  // SAVE TO LOCAL
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  };


  return (
    <div>
      <header>
        Prit's Todo list
      </header>
      <Form inputText={inputText} todos={todos} setInputText={setInputText} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
