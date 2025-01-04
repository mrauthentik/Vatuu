import React from 'react'
import { Todu } from './model'
import '../index.css'
import SingleTodo from './SingleTodo'

interface Props{
    todos: Todu[]
    setTodos: React.Dispatch<React.SetStateAction<Todu[]>>

}

const TodoList:React.FC = ({todos, setTodos}:Props) => {
  return (
    <div className='todos'>
      {todos.map((item)=>{
        <SingleTodo 
         item = {item}
         key = {item.id}
         todos = {todos}
         setTodos = {setTodos}
        />
      })}
    </div>
  )
}

export default TodoList
