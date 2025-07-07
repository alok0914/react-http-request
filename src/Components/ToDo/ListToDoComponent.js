import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from '../../feature/todo/todoSlice'

function ListToDO() {
    const [todo, setToDoList] = useState([]);
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todos)

    function onDeleteHandler(event, id) {
        //dispatch --> reducer --> store
        dispatch(removeTodo(id));
    }

    return (
        <ul>
            {
                todoList.map((list) => (<>
                    <li key={list.id}> {list.text}</li>
                    <button className="btn btn-danger" onClick={(event) => { onDeleteHandler(event, list.id) }}>Delete </button>
                </>))
            }
        </ul>);
}

export default ListToDO