import React from "react";
import "./TaskComplete.css";


class TaskComplete extends React.Component {
    handleClick = (ev) => {
        
        this.props.deleteTaskFunc(ev.currentTarget.dataset.div_id);
    }

    render() {
        return (

            <div className="row done">
                <div className="col-6 col-sm-1"
                    data-div_id={this.props.id}
                    onClick={this.handleClick}> 
                    <i className="fas fa-trash-alt" title="Delete Task" >
                     </i>
                </div>
                <div className="col-6 col-sm-1">
                    <i className="fas fa-undo" title="Mark task incomplete"></i>
                </div>

                <div className="col-12 col-sm-6 greyItalic" >
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