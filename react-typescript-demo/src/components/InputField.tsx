import React, { FC, useRef } from "react";
import '../index.css'

interface Props{
    todo: string
    setTodos: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent)=> void
}

const InputField: React.FC <Props> = ({todo, setTodos,handleAdd}) =>{
   const inputRef = useRef<HTMLInputElement>(null)

  
   return (
        <div>
            <form className="input" 
            onSubmit={
                (e)=>{
                    handleAdd(e)
                    inputRef.current?.blur()
                }
            }>
                <input 
                 type="input"
                 placeholder="Enter a task"
                 className="input-task" 
                 ref={inputRef}
                 value={todo}
                 onChange={
                   (e) => setTodos(e.target.value)
                     
                    }
                 />
            <button className="btn" type="submit" >Create Task</button>
            </form>
        </div>
    ) 
    
}

export default InputField