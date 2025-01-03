import React from "react";
import '../index.css'

const Todo: React.FC = () =>{
    return (
        <div className="todo">
            <span className="heading">Taskon</span>
           <InputField />
        </div>
    )
}
export default Todo