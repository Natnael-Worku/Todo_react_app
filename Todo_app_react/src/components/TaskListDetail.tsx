import React from 'react'
import TaskListDeatilStyle from './TaskListDeatil.module.css'
const TaskListDetail = () => {
  return (
    <li>
            <div className={TaskListDeatilStyle.todo_list}>
              <div className={TaskListDeatilStyle.todo_list_title}>Title of the task</div>
              <div className={TaskListDeatilStyle.checkbox}>
                <input type="checkbox" id="done" />
              </div>
              <div className={TaskListDeatilStyle.edit}>
                <button>Edit</button>
              </div>
              <div className={TaskListDeatilStyle.delete}>
                <button>Delete</button>
              </div>
            </div>
            <div className={TaskListDeatilStyle.todo_list_detail}>
              <div className={TaskListDeatilStyle.todo_list_body}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, repellat?
              </div>
              <div className={TaskListDeatilStyle.todo_list_time}>2:00</div>
            </div>
          </li>
  )
}

export default TaskListDetail