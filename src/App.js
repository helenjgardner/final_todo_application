import React from 'react';
import './App.css';
// import uuid from "uuid/v4";
import TotalItemStatus from './TotalItemStatus';
import AddItem from "./AddItem";
import TaskToDo from "./TaskToDo";
import TaskComplete from "./TaskComplete";
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import axios from 'axios';


class App extends React.Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    // make asynch request to get tasks 
    axios.get('https://ofe1t56so4.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then((response) => {
        // handle success
        // console.log(response.data.tasks);
        this.setState({ tasks: response.data.tasks })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  // called when user selects 'add task' - user then updates date due.  Defaulted to a week
  addTask = (taskText) => {
    if (taskText === "") {
      confirmAlert({
        message: 'Task cannot be blank - please try again',
        buttons: [
          {
            label: 'Ok',
            onClick: () => { }
          }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
      })
      return;
    }

    const newTask = {
      text: taskText,
      completed: false,
      dateDue: moment().add(7, 'days').format("YYYY-MM-DD"),
      dateDone: "",
      id: "",
      userid: "helen.gardner"
    };

    axios.post('https://ofe1t56so4.execute-api.eu-west-2.amazonaws.com/dev/tasks', newTask)
      .then((response) => {
        newTask.id = response.data.taskID;
        const tasksCopy = this.state.tasks.slice();
        tasksCopy.push(newTask);
        this.setState({
          tasks: tasksCopy
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // called to delete task whether task is done or not
  deleteTask = (id) => {
    axios.delete('https://ofe1t56so4.execute-api.eu-west-2.amazonaws.com/dev/tasks/' + id)

      .then((response) => {
        const tasksCopy = this.state.tasks.filter(item => {
          return item.id !== id;
        });
        this.setState({
          tasks: tasksCopy
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // called to mark as task as done or a complete task as not done
  toggleTaskStatus = (id, result) => {
    // if result is true then dealing with task changing from 'not done' to 'done'
    let indTask = this.state.tasks.filter(item => item.id === id);
    // completed can be set to result
    indTask[0].completed = result;
    // if true then dateDone is set to today, otherwise it's undone and dateDone is blank
    if (result) indTask[0].dateDone = moment();
    else {
      indTask[0].dateDone = '';
      indTask[0].dateDue = moment().add(7, 'days').format("YYYY-MM-DD");
    };
    let restTasks = this.state.tasks.filter(item => item.id !== id);
    restTasks.push(indTask[0]);

    axios.put('https://ofe1t56so4.execute-api.eu-west-2.amazonaws.com/dev/tasks/' + id, indTask[0])
      .then((response) => {
        this.setState({
          tasks: restTasks
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // called to set due date
  setDateDue = (id, date) => {
    let indTask = this.state.tasks.filter(item => item.id === id);
    indTask[0].dateDue = date;
    let restTasks = this.state.tasks.filter(item => item.id !== id);
    restTasks.push(indTask[0]);

    axios.put('https://ofe1t56so4.execute-api.eu-west-2.amazonaws.com/dev/tasks/' + id, indTask[0])
      .then((response) => {
        this.setState({
          tasks: restTasks
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // called to edit an incomplete task - user cannot edit a done task
  editTask = (id, newText) => {
    if (newText === "") {
      confirmAlert({
        message: 'Task cannot be blank - please try again',
        buttons: [
          {
            label: 'Ok',
            onClick: () => { }
          }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
      })
      return;
    }
    let indTask = this.state.tasks.filter(item => item.id === id);
    indTask[0].text = newText;
    let restTasks = this.state.tasks.filter(item => item.id !== id);
    restTasks.push(indTask[0]);

    axios.put('https://ofe1t56so4.execute-api.eu-west-2.amazonaws.com/dev/tasks/' + id, indTask[0])
      .then((response) => {
        this.setState({
          tasks: restTasks
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    // split tasks into done and not done and sort them
    const tasksToDo = this.state.tasks.filter(item => { return !item.completed })
    tasksToDo.sort(function (a, b) { return moment(a.dateDue).format('YYYYMMDD') - moment(b.dateDue).format('YYYYMMDD') })
    const tasksDone = this.state.tasks.filter(item => { return item.completed })
    tasksDone.sort(function (a, b) { return moment(a.dateDone).format('YYYYMMDD') - moment(b.dateDone).format('YYYYMMDD') })

    return (
      <div>
        <br />

        <div className="container ">
          <h4> Today's ({moment().format("ddd Do MMM")}) List </h4>
          <div className="row" id="totalItem">
            <hr />
            <TotalItemStatus count={tasksToDo.length} text="Tasks Still to Complete" />
            <TotalItemStatus count={tasksDone.length} text="Tasks Already Done! " />
          </div>

          <div className="row">
            <div className="col-12">
              <hr />
              <AddItem addTaskFunc={this.addTask} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6" >
              <div className="col-12">
                <div className="row" >
                  <h5> Tasks Still to Complete </h5>
                </div>
                {tasksToDo.map(item => {
                  return <TaskToDo key={item.id}
                    id={item.id}
                    task={item.text}
                    completed={item.completed}
                    dateDue={item.dateDue}
                    deleteTaskFunc={this.deleteTask}
                    toggleTaskFunc={this.toggleTaskStatus}
                    setDateDueFunc={this.setDateDue}
                    editTaskFunc={this.editTask} />
                })}
              </div>
              <br />
            </div>

            <div className="col-12 col-lg-6">
              <div className="col-12">
                <div className="row" >
                  <h5> Tasks Already Done!</h5>
                </div>
                {tasksDone.map(item => {
                  return <TaskComplete key={item.id}
                    id={item.id}
                    task={item.text}
                    completed={item.completed}
                    dateDone={item.dateDone}
                    deleteTaskFunc={this.deleteTask}
                    toggleTaskFunc={this.toggleTaskStatus}
                  />
                })}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default App;
