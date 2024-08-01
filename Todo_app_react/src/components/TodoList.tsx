import  { useState } from "react";
import TodoListStyle from "./TodoList.module.css";
import TaskListDetail from "./TaskListDetail";
import { Modal } from "antd";
import { Input } from "antd";
interface DataInterface {
  title: string;
  body: string;
  time: string;
}

interface TodoListProps {
  data: DataInterface[];
  handleedit: (id: string, title: string, body: string, time: string) => void;
  handledelete:(id:string)=> void;
}
const TodoList = ({ data, handleedit,handledelete }: TodoListProps) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [Title, setTtile] = useState("");
  const [Body, setBody] = useState("");
  const [id, setId] = useState("");
  // const [deletetask, setDeleteTask] = useState(false);

  return (
    <div className={TodoListStyle.container}>
      <h1>Tasks to be done</h1>
      <div className={TodoListStyle.Task_list}>
        <ul>
          {data.map((task, index) => (
            <TaskListDetail
              setModal2Open={setModal2Open}
              setId={setId}
              title={task.title}
              body={task.body}
              time={task.time}
              id={String(index)}
              handledelete = {handledelete}
              
            />
          ))}
        </ul>
      </div>

      <Modal
        style={{
          padding: 30,
          alignItems: "center",
          margin: "auto",
        }}
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => {
          handleedit(id, Title, Body, new Date().toLocaleTimeString());
          setTtile('');
          setBody('');
          setModal2Open(false);
        }}
        onCancel={() => setModal2Open(false)}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Input
            value={Title}
            onChange={(event) => setTtile(event?.target.value)}
            width={"80px"}
            placeholder="Title"
          />
          <Input
            value={Body}
            onChange={(event) => setBody(event?.target.value)}
            width={40}
            placeholder="description"
          />
        </div>
      </Modal>
    </div>
  );
};

export default TodoList;
