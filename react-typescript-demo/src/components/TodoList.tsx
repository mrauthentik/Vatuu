import React from 'react'
import { Todu } from './model'
import '../index.css'
import SingleTodo from './SingleTodo'

interface Props{
    item: Todu
    key:number
    todos: Todu[]
    setTodos: React.Dispatch<React.SetStateAction<Todu[]>>

}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((item)=>{
        return (
        <SingleTodo 
         item = {item}
         key = {item.id}
         todos = {todos}
         setTodos = {setTodos}
        />
        )
      })}
    </div>
  )
}

export default TodoList
