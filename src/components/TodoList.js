import React from "react";
import classes from './TodoList.module.css'

const TodoList = (props) => {
  let displayTodo;

//   displayTodo = props.todos.map(todo=> {
//       return (
//           <li>{todo}</li>
//       )
//   })

    
  displayTodo = props.todos.map((todo) => {
    return <li onClick={props.onClick.bind(this, todo)} className= {classes['list-todo']} key={props.todos.findIndex(td => todo === td)} >{(props.todos.findIndex(td => todo === td))+1}. {todo}</li>;
  });
  return (
    props.todos.length> 0 ? <div className={classes['todo-list-section']} >
    <ul>{displayTodo}</ul>
  </div>: <div className={classes.notodo}><h1>No Todos in List</h1></div>
  );
};  

export default TodoList;
