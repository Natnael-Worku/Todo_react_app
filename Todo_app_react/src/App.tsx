
import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


interface DataInterface {
  title: string;
  body: string;
  time: string;
}

function App() {
  const [data, setData] = useState<DataInterface[]>(  
    
    () =>
    [
    {
      title: 'abs',
      body: 'lorem ibhjavs gvsa hgnvsbn',
      time: 'agsjvvnsbvn',
    },
  ]);

  return (
    <>
      <TodoInput setData = {setData} />
      <TodoList data={data} />
    </>
  );
}

export default App;
