import React from 'react';
import './App.css';
import TotalItemStatus from './TotalItemStatus';
import AddItem from "./AddItem";
import TaskToDo from "./TaskToDo";
import TaskComplete from "./TaskComplete";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2> Today's To Do List <i class="fas fa-pencil-alt"> </i> </h2>
        
        <div className="container">
          <div className="row" id="totalItem">
            <hr />
            <TotalItemStatus count={3} text="Tasks Still to Complete" />
            <TotalItemStatus count={2} text="Tasks Already Done!! " />           
          </div>

          <hr />
          <AddItem />
          <hr />
          <h5> Tasks Still to Complete </h5>

          <TaskToDo task="Javascript Exercises" />
          <TaskToDo task="Higher Order Function CodeWars" />
          <TaskToDo task="Make Website look less rubbish" />
          <br />
          <h5> Tasks Already Done!!</h5>
          <TaskComplete task="School Run" />
          <TaskComplete task="Morning Coffee" />
        </div>
      </div >

    );


  }

}

export default App;
