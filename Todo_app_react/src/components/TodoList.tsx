import React from "react";
import TodoListStyle from './TodoList.module.css'
import TaskListDetail from "./TaskListDetail";
const TodoList = () => {
  return (
    <div className={TodoListStyle.container}>
      <h1>Tasks to be done</h1>
      <div className={TodoListStyle.Task_list}>
        <ul>
          <TaskListDetail/>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
