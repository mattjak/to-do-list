import React from "react";
import './todo-list-item.css'

const ToDoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'red' : 'black'
    };
    return (

        <span className='to-do-list-item' >
        <span style={style} className="to-do-list-item-label">
            {label}
        </span>
            <button type="button" className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button" className="btn btn-sm btn-outline-danger">
                    <i className="fa fa-trash-o"/>
            </button>
        </span>
    )
};
export default ToDoListItem;