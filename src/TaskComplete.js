import React from "react";
import "./TaskComplete.css";
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class TaskComplete extends React.Component {
  handleClick = () => {
    confirmAlert({
      title: 'Delete',
      message: 'Are you sure you want to delete this task "' + this.props.task + '"?',
      buttons: [
        {
          label: 'Cancel',
          onClick: () => { }
        },
        {
          label: 'Ok',
          onClick: () => this.props.deleteTaskFunc(this.props.id)
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,

    })
  };

  handleClickUnDone = () => {
    // done = false since task was done but now isn't
    this.props.toggleTaskFunc(this.props.id, false);
  }

  render() {
    return (
      <div className="row taskList rounded align-items-center">
        <div className="col-4 col-sm-3 col-md-3">
          <i className="fas fa-trash-alt pad" title="Delete Task" onClick={this.handleClick}></i>
          <i className="fas fa-undo blue" onClick={this.handleClickUnDone}
            title="Mark task incomplete"></i>
        </div>

        <div className="col-8 col-sm-4 col-md-4 greyItalic remMarg" >
          {this.props.task}
        </div>

        <div className="col-7 col-sm-5 col-md-5 greyItalic remMarg">
          Done {moment(this.props.dateDone, "YYYY-MM-DD").format("DD/MM/YYYY")}
        </div>
      </div>
    );
  }
}

export default TaskComplete;