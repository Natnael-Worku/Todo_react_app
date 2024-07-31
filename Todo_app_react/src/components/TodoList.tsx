import React from "react";
import TodoListStyle from './TodoList.module.css'
import TaskListDetail from "./TaskListDetail";
interface DataInterface {
    title: string;
    body: string;
    time: string;
  }
  
  interface TodoListProps {
    data: DataInterface[];
  }
const TodoList = ({data}:TodoListProps) => {
  return (
    <div className={TodoListStyle.container}>
      <h1>Tasks to be done</h1>
      <div className={TodoListStyle.Task_list}>
        <ul>

            {
               data.map( task => <TaskListDetail title={task.title} body={task.body} time= {task.time} /> ) 
            }
            
                 
          
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
