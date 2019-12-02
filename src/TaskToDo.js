import React from "react";
import "./TaskToDo.css";
import 'date-fns';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css



class TaskToDo extends React.Component {
    handleClickDel = () => {
        confirmAlert({
          title: 'Delete',
          message: 'Are you sure you want to delete this task "' + this.props.task +'"?',
          buttons: [
            {
              label: 'Cancel',
              onClick: () => {}
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

    handleClickDone = () => {
        // done = true since task was not done and now is
        this.props.toggleTaskFunc(this.props.id, true);
    }

    handleDateChange = (date) => {
        this.props.setDateDueFunc(this.props.id, date);
    }

    handleClickEdit = () => {
        var newText = prompt('Update task details', this.props.task);
        this.props.editTaskFunc(this.props.id, newText)
    }

    render() {
        return (
            <div className="row toDo align-items-center rounded">
                <div className="col-4 col-sm-3 col-md-3 align-middle">
                    <i className="fas fa-trash-alt pad"
                        title="Delete Task"
                        onClick={this.handleClickDel}>
                    </i>
                    <i className="fas fa-clipboard-check green pad" 
                        title="Mark as Done"
                        onClick={this.handleClickDone} >
                    </i>
                    <i className="fas fa-pencil-alt blue"
                        title="Edit"
                        onClick={this.handleClickEdit} >
                    </i>
                </div>
                
                <div className="col-8 col-sm-5 col-md-5 align-bottom">
                    {this.props.task}
                </div>
                <div className="col-12 col-sm-4 col-md-4 align-text-top" >
                    
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container>
                            <KeyboardDatePicker
                                // margin="normal"
                                id="date-picker-dialog"
                                label="Date Due"
                                format="dd/MM/yyyy"
                                value={this.props.dateDue}
                                minDate={moment()}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
            </div >
        );
    }
}

export default TaskToDo;
