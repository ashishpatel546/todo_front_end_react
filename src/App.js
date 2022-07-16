import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState([])

  const onAddTodoHandler = newTodo =>{
    setTodo(prev => [...prev, newTodo])
  }

  function removeHandler(todoToRemove){
    // const itemToRemove = todo[removeTodoIndex]
    const newTodos = todo.filter(td => todoToRemove!==td)
    setTodo(newTodos)
  }

  return (
    <div className=  'main-section' >
      
      <Header />
      <TodoForm onAddTodo={onAddTodoHandler} />
      <TodoList onClick = {removeHandler} todos = {todo} />
      
      
    </div>
  );
}

export default App;
