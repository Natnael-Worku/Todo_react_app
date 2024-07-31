import React from "react";
import TaskListDeatilStyle from "./TaskListDeatil.module.css";
interface props {
  title: string;
  body: string;
  time: string;
  id: string;
  setModal2Open: (prev: boolean) => void;
  setId: (id: string) => void;
  handledelete: (id: string) => void;
}
const TaskListDetail = ({
  title,
  body,
  time,
  id,
  setModal2Open,
  setId,
  handledelete
}: props) => {
  return (
    <>
      <li>
        <div className={TaskListDeatilStyle.todo_list}>
          <div className={TaskListDeatilStyle.todo_list_title}>{title}</div>
          <div className={TaskListDeatilStyle.checkbox}>
            <input type="checkbox" id="done" />
          </div>
          <button
            onClick={() => {
              setId(id);
              setModal2Open(true);
            }}
            key={id}
            className={TaskListDeatilStyle.edit}
          >
            Edit
          </button>
          <button
            key={id}
            onClick={() => handledelete(id)}
            className={TaskListDeatilStyle.delete}
          >
            Delete
          </button>
        </div>
        <div className={TaskListDeatilStyle.todo_list_detail}>
          <div className={TaskListDeatilStyle.todo_list_body}>{body}</div>
          <div className={TaskListDeatilStyle.todo_list_time}>{time}</div>
        </div>
      </li>
    </>
  );
};

export default TaskListDetail;
