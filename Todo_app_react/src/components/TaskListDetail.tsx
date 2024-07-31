import React from 'react'
import TaskListDeatilStyle from './TaskListDeatil.module.css'
interface props{
    title:string,
    body:string,
    time: string
}
const TaskListDetail = ({title,body,time}:props) => {
  return (
    <li>
            <div className={TaskListDeatilStyle.todo_list}>
              <div className={TaskListDeatilStyle.todo_list_title}>{title}</div>
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
                {body}
              </div>
              <div className={TaskListDeatilStyle.todo_list_time}>{time}</div>
            </div>
          </li>
  )
}

export default TaskListDetail