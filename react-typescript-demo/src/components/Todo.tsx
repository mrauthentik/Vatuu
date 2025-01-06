import React, { useState } from "react";
import '../index.css'
import InputField from "./InputField";
import {  Todu } from './model'
import TodoList from "./TodoList";

const Todo: React.FC = () =>{
   
   const [todo, setTodo] = useState<string>('')
   const [todos, setTodos] = useState<Todu[]>([])

   const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault()
    console.log('button has been clicked')
     console.log(todo)

    if(todo) {
       setTodos([...todos, {id: Date.now(), todo, isDone:false}])
       setTodo("")
    }
  }

    console.log(todos)
   return (
        <div className="todo">
            <span className="heading">Todo List</span>
           <InputField 
             todo= {todo}
             setTodos={setTodo}
             handleAdd={handleAdd}
            
            />
            <TodoList 
             todos ={todos}
             setTodos = {setTodos}
            />
            {todos.map((t)=> <li>{t.todo}</li>)}
        </div>
    )
}
export default Todo