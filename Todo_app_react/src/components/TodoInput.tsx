import React, { useState } from "react";
import TodoInputStyle from "./TodoInput.module.css";

interface DataInterface {
  title: string;
  body: string;
  time: string;
}

interface TodoListProps {
  data: DataInterface[];
}

interface Props {
  setData: React.Dispatch<React.SetStateAction<DataInterface[]>>;
}

const TodoInput: React.FC<Props> = ({ setData }) => {
  const [titleValue, setTitleValue] = useState(()=> "");
  const [bodyValue, setBodyValue] = useState(()=>"");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBodyValue(event.target.value);
  };

  const handleSubmit = () => {
    if (titleValue && bodyValue) {
      const newTodo: DataInterface = {
        title: titleValue,
        body: bodyValue,
        time: new Date().toLocaleTimeString(),
      };
  
      setData((prev) => [...prev, newTodo]);
      setTitleValue("");
      setBodyValue("");

    }
    
  };

  return (
    <div className={TodoInputStyle.container}>
      <h1>Todo App</h1>
      <div className={TodoInputStyle.input_container}>
        <label htmlFor="title">Insert task title</label>
        <input
          type="text"
          id="title"
          value={titleValue}
          onChange={handleInputChange}
        />
        <label htmlFor="description">Insert task detail</label>
        <textarea
          id="description"
          value={bodyValue}
          onChange={handleBodyChange}
        />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
