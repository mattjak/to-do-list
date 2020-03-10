import React from "react";
import ReactDOM from "react-dom"
import AppHeader from "./components/app-header";
import SearchPanel from "./components/serch-panel";
import ToDoList from "./components/todo-list";

const App = ()=>{
    const toDoData = [
        {label:'stay sharp',important:false,id:1},
        {label:'do not loose opportunities',important:false,id:2},
        {label:"be cool",important:false,id:3},
        {label:'be patient',important:true,id:4}

    ]
    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList todos={toDoData}/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'))