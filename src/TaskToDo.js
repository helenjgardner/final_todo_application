import React from "react";
import "./TaskToDo.css";

class TaskToDo extends React.Component {
    render() {
        return (

            <div className="row toDo">
                <div className="col-2">
                    <button type="button" className="btn btn-primary" id="taskTButton">Delete</button>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-secondary" id="taskTButton">Mark Done</button>
                </div>
                <div className="col-8">
                    {this.props.task}
                </div>
            </div>
         
        );

    }

}

export default TaskToDo;