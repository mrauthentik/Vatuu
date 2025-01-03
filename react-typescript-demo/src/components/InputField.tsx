import React from "react";
import '../index.css'

const InputField: React.FC = () =>{
    return (
        <div>
            <form className="input">
                <input type="input" placeholder="Enter a task" className="input-task" />
            <button className="btn" type="submit">Go</button>
            </form>
        </div>
    )
}

export default InputField