import React from 'react'
import '../index.css'
import { Todu } from './model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

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
                <span className="icon">
                  <AiFillEdit />
                </span>
                <span className="icon">
                  <AiFillDelete />
                </span>
                <span className="icon">
                  <MdDone />
                </span>
            </div>
       </form>
    </div>
  )
}

export default SingleTodo
