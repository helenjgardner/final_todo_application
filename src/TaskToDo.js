import React from "react";
import "./TaskToDo.css";

class TaskToDo extends React.Component {
    render() {
        return (

            <div className="row toDo">
                <div className="col-12 col-sm-1">
                    <i className="fas fa-trash-alt"> </i>
                </div>
                <div className="col-12 col-sm-1">
                    <i className="fas fa-clipboard-check"></i>
                </div>
                <div className="col-12 col-sm-7">
                    {this.props.task}
                </div>
                <div className="col-12 col-sm-3">
                    Due {this.props.dateDue}
                </div>
            </div>

        );

    }

}

export default TaskToDo;