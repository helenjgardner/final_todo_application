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
        {/* would you put this as a header component? 
             also is the single apostrophe in the h2 ok?*/}

        <h2> Today's To Do List </h2>

        <div className="container">
          {/* if we start row here we can put both items on one line as it gets bigger but is it ok? */}
          <div className="row" id="totalItem">
            <hr />
            <TotalItemStatus count={3} text="Tasks Still to Complete" />
            <TotalItemStatus count={2} text="Tasks Already Done!! " />           
          </div>
        </div>
        <div className="container">
          <hr />
          <AddItem />
          <br />
        </div>
        <div className="container">
          <hr />
          <h5> Tasks Still to Complete </h5>

          <TaskToDo task="Javascript Exercises" />
          <TaskToDo task="Higher Order Function CodeWars" />
          <TaskToDo task="Make Website look less rubbish" />
          <br />
        </div>
        <div className="container">
          <h5> Tasks Already Done!!</h5>
          <TaskComplete task="School Run" />
          <TaskComplete task="Morning Coffee" />
        </div>
      </div >

    );


  }

}

export default App;
