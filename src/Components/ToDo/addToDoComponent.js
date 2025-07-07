import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from '../../feature/todo/todoSlice';

function AddToDO() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    function onCreateUser(event) {
        event.preventDefault();
        //dispatch --> reducer --> store
        dispatch(addTodo(input));
        setInput('');
    }

    function onInputChange(event){
        setInput(event.target.value);
    }
    return <>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>Add Task</h3>
                <div className="user-form">
                    <form onSubmit={onCreateUser}>
                        <div>
                            <label>Task Description</label>
                            <input type="text" placeholder="Task Name" value={input} onChange={onInputChange} />
                        </div>
                        <button className='add-task-button'>Task Add</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default AddToDO