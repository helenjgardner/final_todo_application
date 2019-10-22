import React from "react";
import "./TaskComplete.css";

class TaskComplete extends React.Component {
    render() {
        return (

            <div className="row done">
                <div className="col-6 col-sm-1">
                    <i className="fas fa-trash-alt"> </i>
                </div>
                <div className="col-6 col-sm-1">
                    <i className="fas fa-undo"></i>
                </div>

                <div className="col-12 col-sm-6 greyItalic">
                {this.props.task}
                 </div>
                
                <div className="col-12 col-sm-4 greyItalic">
                    Done {this.props.dateDone}
                </div>
            </div >

        );

    }

}

export default TaskComplete;