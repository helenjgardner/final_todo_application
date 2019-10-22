import React from 'react';
import './App.css';
import uuid from "uuid/v4";
import TotalItemStatus from './TotalItemStatus';
import AddItem from "./AddItem";
import TaskToDo from "./TaskToDo";
import TaskComplete from "./TaskComplete";

class App extends React.Component {

  state = {
    tasksToDo: [
      { text: "clean driveway", completed: false, dateDue: "2019-11-30", dateDone: "", id: uuid() },
      { text: "paint landing", completed: false, dateDue: "2019-12-31", dateDone: "", id: uuid() },
      { text: "mend trousers", completed: false, dateDue: "2019-10-25", dateDone: "", id: uuid() }
    ],
    tasksDone: [
      { text: "change dishwasher salt", completed: true, dateDue: "", dateDone: "2019-10-21", id: uuid() },
      { text: "buy crayons", completed: true, dateDue: "", dateDone: "2019-10-22", id: uuid() }
    ]
  }

  addTask = (taskText) => {
       const newTask = {
      text: taskText,
      completed: false,
      dateDue: "2019-10-21",
      dateDone: "",
      id: uuid()
    };

    const tasksCopy = this.state.tasksToDo.slice();
    tasksCopy.push(newTask);
    this.setState({
      tasksToDo: tasksCopy
    })
  }

  render() {
    return (
      <div>
        <br />
        <h2> Today's To Do List <i className="fas fa-pencil-alt"> </i> </h2>

        <div className="container">
          <div className="row" id="totalItem">
            <hr />
            <TotalItemStatus count={this.state.tasksToDo.length} text="Tasks Still to Complete" />
            <TotalItemStatus count={this.state.tasksDone.length} text="Tasks Already Done!! " />
          </div>

          <hr />
          <AddItem addTaskFunc={this.addTask}/>

          <h5> Tasks Still to Complete </h5>
          {this.state.tasksToDo.map(item => {
            return <TaskToDo key={item.id} task={item.text} completed={item.completed} dateDue={item.dateDue} />
          })}
          <br />
          <h5> Tasks Already Done!!</h5>
          {this.state.tasksDone.map(item => {
            return <TaskComplete key={item.id} task={item.text} completed={item.completed} dateDone={item.dateDone} />
          })}
        </div>
        <br />
      </div>


    );


  }

}

export default App;
