import React from 'react';
import './App.css';
import uuid from "uuid/v4";
import TotalItemStatus from './TotalItemStatus';
import AddItem from "./AddItem";
import TaskToDo from "./TaskToDo";
import TaskComplete from "./TaskComplete";

class App extends React.Component {

  state = {
    tasks: [
      { text: "clean driveway", completed: false, dateDue: "2019-11-30", dateDone: "", id: uuid() },
      { text: "paint landing", completed: false, dateDue: "2019-12-31", dateDone: "", id: uuid() },
      { text: "mend trousers", completed: false, dateDue: "2019-10-25", dateDone: "", id: uuid() },
      { text: "change dishwasher salt", completed: true, dateDue: "", dateDone: "2019-10-21", id: uuid() },
      { text: "buy crayons", completed: true, dateDue: "", dateDone: "2019-10-22", id: uuid() }
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
      dateDue: "2019-10-21",
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

  toggleTaskStatus = (id,result) => {
  
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.forEach(item => {
      const temp = item.completed;
      item.id === id ? item.completed=result :item.completed=temp
    })
   
    this.setState({
      tasks: tasksCopy
    })
  }
 
  render() {
    // is this valid?
    const tasksToDo=this.state.tasks.filter( dot =>{return !dot.completed})  
    const tasksDone=this.state.tasks.filter( dot =>{return dot.completed})  

    return (
      <div>
        <br />
        {/* <h2> Today's ({Date()} ) To Do List <i className="fas fa-pencil-alt"> </i> </h2> */}
        <h2> Today's To Do List</h2>

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
              toggleTaskFunc={this.toggleTaskStatus}/>
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
