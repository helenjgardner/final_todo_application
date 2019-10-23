import React from "react";
import "./TaskToDo.css";

class TaskToDo extends React.Component {
    handleClick = (ev) => {
        
        this.props.deleteTaskFunc(ev.currentTarget.dataset.div_id);
    }
    render() {
        return (

            <div className="row toDo">
                <div className="col-6 col-sm-1" data-div_id={this.props.id}
                    onClick={this.handleClick}>
                    <i className="fas fa-trash-alt"> </i>
                </div>
                <div className="col-6 col-sm-1 green">
                    <i className="fas fa-clipboard-check"></i>
                </div>
                <div className="col-12 col-sm-6">
                 {this.props.task} 
                </div>
                <div className="col-12 col-sm-4">
                    Due {this.props.dateDue} 
                </div>
            </div>

        );

    }

}

export default TaskToDo;