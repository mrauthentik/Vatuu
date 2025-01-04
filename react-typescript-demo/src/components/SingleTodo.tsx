import React from 'react'
import '../index.css'
import { Todu } from './model'

type Props = {
    todos: Todu[]
    item: Todu
    setTodos: React.Dispatch<React.SetStateAction<Todu[]>>
}

const SingleTodo: React.FC = ({todos,item,setTodos}:Props) => {
  return (
    <div>
       <form className='single'>
            <span className="single-text"> {item.todo}</span>
            <div>
                <span className="icon">Edit</span>
                <span className="icon">Delete</span>
                <span className="icon">Done</span>
            </div>
       </form>
    </div>
  )
}

export default SingleTodo
