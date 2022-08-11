import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [task,setTask] = useState("");
  const[todos,setTodos] = useState([])

  const handler = e=>{
    setTask(e.target.value)
  }

  const submitHandler = e=>{
    e.preventDefault();
    setTodos([...todos,task]);
    setTask("")

  }
  const deleteHandler = (indexValue) => {
    setTodos(todos.filter((todo,index)=>index!==indexValue))
    setTask("");
  };
  return (
    <div>
      <center>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input type="text" value={task} onChange={handler} name="task" placeholder="Enter Todos"/>&nbsp;
              <input type="submit" value="Add"/>
            </form>
            <TodoList todos={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Todo;
