import React from "react";
import ToDoListItem from "./todo-list-item";
import './todo-list.css';
const ToDoList = ({todos}) => {
   const elements =  todos.map((item)=>{
       const {id, ...itemProps} = item;
       return <li className='list-group-item' key={id}><ToDoListItem {...itemProps}/></li>
    });
    return (
        <ul className='list-group to-do-list'>
            {elements}
        </ul>
    )
};
export default ToDoList;