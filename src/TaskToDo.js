import React from "react";
import "./TaskToDo.css";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



class TaskToDo extends React.Component {
    state = { startDate: "2019-10-25"}

    handleClickDel = (ev) => {
        alert(this.props.id)
        this.props.deleteTaskFunc(ev.currentTarget.dataset.div_id);
    }
    handleClickDone = (ev) => {
        // done = true since task was not done and now is
        this.props.toggleTaskFunc(ev.currentTarget.dataset.div_id, true);
    }

    handleDateChange = (event) => {
        this.props.setDateDueFunc(this.props.id,event.target.value);

    }
    render() {
        return (

            <div className="row toDo">
                <div className="col-6 col-sm-1" data-div_id={this.props.id}
                    onClick={this.handleClickDel}>
                    <i className="fas fa-trash-alt" title="Delete Task"> </i>
                </div>
                <div className="col-6 col-sm-1 green" data-div_id={this.props.id}
                    onClick={this.handleClickDone}>
                    <i className="fas fa-clipboard-check" title="Mark as Done"></i>
                </div>
                <div className="col-12 col-sm-3">
                    {this.props.task}
                </div>
                <div className="col-6 col-sm-6" >
                Due
                <input type="date" 
                name="dateChosen"
                value={this.props.dateDue}
                min={moment().format("YYYY-MM-DD")}
                onChange={this.handleDateChange}
                /> 
                </div>
                  {/* <DatePicker 
                         selected={this.state.startDate}
                         onChange={this.handleChange} 
                         minDate={new Date()}
                            dateFormat="yyyy-MM-dd"
                           
                         />  */}
                     {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Choose date due"
          format="MM/dd/yyyy"
          value={this.props.datedue !=='' ? this.props.datedue: this.state.startDate}
          minDate={new Date()}
          onChange={this.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
 */}


            </div >
            

                );

    }

}

export default TaskToDo;
