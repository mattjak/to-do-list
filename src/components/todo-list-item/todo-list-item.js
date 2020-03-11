import React from "react";
import './todo-list-item.css'

export default class ToDoListItem extends React.Component {
    state = {
        done: false,
        important: false
    };
    onLabelClick = () => {
        this.setState(
            {done: true}
        )

    };
    onMArkImportant = () => {
        this.setState({
            important: true
        })
    }

    render() {
        const {label} = this.props;
        const {done, important} = this.state;
        let classNames = 'to-do-list-item';
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }

        return (

            <span className={classNames}>
        <span onClick={this.onLabelClick} className="todo-list-item-label">
            {label}
        </span>
            <button onClick={this.onMArkImportant} type="button" className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button" className="btn btn-sm btn-outline-danger">
                    <i className="fa fa-trash-o"/>
            </button>
        </span>
        )
    }

}

