import React from 'react'
import TodoInputStyle from './TodoInput.module.css'
const TodoInput = () => {
  return (
    <div className= {TodoInputStyle.container}>
        <h1> Todo App</h1>
        <div className={TodoInputStyle.input_container}>
            <label htmlFor="title"> insert task title</label>
            <input type="text" id= "title"/>
            <label htmlFor="description"> insert task detail</label>
            <textarea  id= "description"/>
            <button className='btn'> submit</button>
        </div>

    </div>
  )
}

export default TodoInput