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



class TaskToDo extends React.Component {
    handleClickDel = (ev) => {
        if (window.confirm('Are you sure you want to delete?')) {
            this.props.deleteTaskFunc(this.props.id);
        }
    }

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
            <div className="row toDo">
                <div className="col-3 col-sm-1">
                    <i className="fas fa-trash-alt"
                        title="Delete Task"
                        onClick={this.handleClickDel}>
                    </i>
                </div>
                <div className="col-3 col-sm-1 ">
                    <i className="fas fa-clipboard-check green" 
                        title="Mark as Done"
                        onClick={this.handleClickDone} >
                    </i>
                </div>
                <div className="col-3 col-sm-1">
                    <i className="fas fa-pencil-alt"
                        title="Edit"
                        onClick={this.handleClickEdit} >
                    </i>
                </div>
                <div className="col-12 col-sm-5">
                    {this.props.task}
                </div>
                <div className="col-12 col-sm-4" >
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around" alignItems="center">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Choose date due"
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
