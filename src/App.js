import React from 'react';
import './App.css';
import uuid from "uuid/v4";
import TotalItemStatus from './TotalItemStatus';
import AddItem from "./AddItem";
import TaskToDo from "./TaskToDo";
import TaskComplete from "./TaskComplete";
import moment from 'moment';

class App extends React.Component {

  state = {
    tasks: [
      { text: "clean driveway", completed: false, dateDue: moment().format("YYYY-MM-DD"), dateDone: "", id: uuid() },
      { text: "paint landing", completed: false, dateDue: moment().format("YYYY-MM-DD"), dateDone: "", id: uuid() },
      { text: "mend trousers", completed: false, dateDue: moment().format("YYYY-MM-DD"), dateDone: "", id: uuid() },
      { text: "change dishwasher salt", completed: true, dateDue: "", dateDone: "2019-10-12", id: uuid() },
      { text: "buy crayons", completed: true, dateDue: "", dateDone: "2019-09-01", id: uuid() }
    ]
  }

  addTask = (taskText) => {
    if (taskText === "") {
      alert('Task cannot be blank - please try again');
      return;
    }
    const newTask = {
      text: taskText,
      completed: false,
      dateDue: moment().format("YYYY-MM-DD"),
      dateDone: "",
      id: uuid()
    };

    const tasksCopy = this.state.tasks.slice();
    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy
    })
  }

  deleteTask = (id) => {

    const tasksCopy = this.state.tasks.filter(item => {
      return item.id !== id;
    });
    this.setState({
      tasks: tasksCopy
    })
  }

  toggleTaskStatus = (id, result) => {
    // if result is true then dealing with task changing from 'not done' to 'done'
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.forEach(item => {
      if (item.id === id) {
        // completed can be set to result
        item.completed = result;
        // if true then dateDone is set to today, otherwise it's undone and dateDone is blank
        if (result) { 
          item.dateDone = moment();
        }
        else {
          item.dateDone = '';
          item.dateDue=moment().format("YYYY-MM-DD");};
      }
    })
    this.setState({
      tasks: tasksCopy
    })
  }

  setDateDue = (id, date) => {
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.forEach(item => {
      if (item.id === id) { item.dateDue = date };
    })
    this.setState({
      tasks: tasksCopy
    })
  }

  sortByDate = (sortDate) => {
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.sort(function (a, b) { return moment(a.sortDate).format('YYYYMMDD') - moment(b.sortDate).format('YYYYMMDD') });
    this.setState({
      tasks: tasksCopy
    })
  }

  editTask = (id, newText) => {
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.forEach(item => {
      if (item.id === id) { item.text = newText };
    })
    this.setState({
      tasks: tasksCopy
    })
  }

  render() {

    const tasksToDo = this.state.tasks.filter(item => { return !item.completed })
    const tasksDone = this.state.tasks.filter(item => { return item.completed })

    return (
      <div>
        <br />
        <h3> Today's ({moment().format("dddd Do MMM")}) To Do List </h3>
        <div className="container">
          <div className="row" id="totalItem">
            <hr />
            <TotalItemStatus count={tasksToDo.length} text="Tasks Still to Complete" />
            <TotalItemStatus count={tasksDone.length} text="Tasks Already Done!! " />
          </div>

          <hr />
          <AddItem addTaskFunc={this.addTask} />

          <h5> Tasks Still to Complete </h5>
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
          <br />
          <h5> Tasks Already Done!!</h5>
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
        <br />
      </div>


    );


  }

}

export default App;
