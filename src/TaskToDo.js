import React from "react";
import "./TaskToDo.css";

class TaskToDo extends React.Component{
    render(){
         return (

            <div className="row" id="totalItem">
            <div className="col-1">
            <button type="button" className="btn btn-primary" id="taskButton">Delete</button>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-secondary" id="taskButton">Mark Complete</button>
            </div>
            <div className="col-9">
                {this.props.task}
            </div>
        </div>
         );

    }

}

export default TaskToDo;