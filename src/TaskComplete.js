import React from "react";
import "./TaskComplete.css";
import moment from 'moment';


class TaskComplete extends React.Component {
    handleClick = (ev) => {
        if (window.confirm('Are you sure you want to delete?')) {
            this.props.deleteTaskFunc(ev.currentTarget.dataset.div_id);
        }
    }
    handleClickUnDone = () => {
        // done = false since task was done but now isn't
        this.props.toggleTaskFunc(this.props.id, false);
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
                <div className="col-6 col-sm-1" >
                    <i className="fas fa-undo" onClick={this.handleClickUnDone}
                    title="Mark task incomplete"></i>
                </div>

                <div className="col-12 col-sm-6 greyItalic" >
                    {this.props.task}
                </div>

                <div className="col-12 col-sm-4 greyItalic">
                    Done {moment(this.props.dateDone, "YYYY-MM-DD").format("DD/MM/YYYY")}
                </div>
            </div >

        );

    }

}

export default TaskComplete;