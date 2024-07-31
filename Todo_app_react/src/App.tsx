import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

interface DataInterface {
  title: string;
  body: string;
  time: string;
}

function App() {
  const [data, setData] = useState<DataInterface[]>(() => []);
  const handledelete = (id:string) => {

    setData((prevTodos) =>
      prevTodos.filter((todo,index)=> index !== Number(id))
    );

  };
  const handleedit = (
    id: string,
    title: string,
    body: string,
    time: string
  ) => {
    setData((prevTodos) =>
      prevTodos.map((todo, idx) =>
        idx === Number(id) ? { ...todo, title, body, time } : todo
      )
    );
  };

  return (
    <>
      <TodoInput setData={setData} />
      <TodoList data={data} handleedit={handleedit}  handledelete= {handledelete} />
    </>
  );
}

export default App;
