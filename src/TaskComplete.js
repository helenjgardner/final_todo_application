import React from "react";
import "./TaskComplete.css";

class TaskComplete extends React.Component {
    render() {
        return (

            <div className="row done">
                <div className="col-2">
                    <button type="button" className="btn btn-primary" id="taskCButton">Delete</button>
                </div>
                <div className="col-10">
                    {this.props.task}
                </div>
            </div>
            
         );

    }

}

export default TaskComplete;