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
       
          <h5> Tasks Still to Complete </h5>

          <TaskToDo task="Javascript Exercises" dateDue="2019-10-26" completed={false}/>
          <TaskToDo task="Higher Order Function CodeWars" dateDue="2019-10-26" completed={false}/>
          <TaskToDo task="Make Website look less rubbish" dateDue="2019-10-26" completed={false}/>
          <br />
          <h5> Tasks Already Done!!</h5>
          <TaskComplete task="School Run" dateDone="2019-10-22" completed={true}/>
          <TaskComplete task="Morning Coffee" dateDone="2019-10-22" completed={true}/>
        </div>
      </div >

    );


  }

}

export default App;
