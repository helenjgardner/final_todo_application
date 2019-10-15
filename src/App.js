import React from 'react';
import './App.css';
import TotalItemStatus from './TotalItemStatus';
import AddItem from "./AddItem";
import TaskToDo from "./TaskToDo";
import TaskComplete from "./TaskComplete";

class App extends React.Component{
   render(){
     return (
      <div> 
        {/* would you put this as a header component? 
             also is the single apostrophe ok?*/}
        <h2> Today's To Do List </h2>

        <TotalItemStatus count={3} text="Tasks Still to Complete"/>
        <TotalItemStatus count={2} text="Tasks Already Done!! "/>
        <br />
        <AddItem />
        <br />
        <h1> Tasks Still to Complete </h1>
        <TaskToDo task="Javascript Exercises" />
        <TaskToDo task="Higher Order Function CodeWars" />
        <TaskToDo task="Make Website look less rubbish" />
        <br />
        <h1> Tasks Already Done!!</h1>
        <TaskComplete task="School Run" />
        <TaskComplete task="Morning Coffee" />

      </div>

     );


   }

}

export default App;
