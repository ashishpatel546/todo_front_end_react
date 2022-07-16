import React, { useState } from "react";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [isValidData, setIsValidData] = useState(true);

  const enteredTodoHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredTodo.trim().length < 3){
        setIsValidData(false)
        return
    }
    setIsValidData(true)
    props.onAddTodo(enteredTodo);
    setEnteredTodo('')
  };

  return (
    <div className={classes["form-section"]}>
      <h3>Enter a new todo</h3>
      <form onSubmit={submitHandler} className={classes["form-control"]}>
        <label htmlFor="item" />
        <input
          type="text"
          placeholder="Enter New Todo"
          name="item"
          value={enteredTodo}
          onChange={enteredTodoHandler}
        />
        
        <button type="submit">Add Todo</button>

      </form>
      {!isValidData && <p className={classes.error}>Please enter the valid data</p>}
    </div>
  );
};

export default TodoForm;
