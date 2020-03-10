import React from "react";
import './todo-list-item.css'

export default class ToDoListItem extends React.Component {
    state = {
        done: false
    }
    onLabelClick = () => {
        this.setState(
            {done:true}
        )

    };

    render() {
        const {label, important = false} = this.props;
        const {done} = this.state;
        let classNames = 'to-do-list-item';
        if (done){
            classNames += ' done'
        }
        const style = {
            color: important ? 'red' : 'black'
        };
        return (

            <span className={classNames}>
        <span onClick={this.onLabelClick} style={style} className="to-do-list-item-label">
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
    }

}

