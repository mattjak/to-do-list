import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../serch-panel";
import ToDoList from "../todo-list";
import './app.css'

const App = ()=>{
    const toDoData = [
        {label:'stay sharp',important:false,id:1},
        {label:'do not loose opportunities',important:false,id:2},
        {label:"be cool",important:false,id:3},
        {label:'be patient',important:true,id:4}

    ];
    return(
        <div className="todo-app">
            <AppHeader/>
            <SearchPanel/>
            <ToDoList todos={toDoData}/>
        </div>
    )
};
export default App;

