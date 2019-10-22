import React from 'react';
import './App.css';
import uuid from "uuid/v4";
import TotalItemStatus from './TotalItemStatus';
import AddItem from "./AddItem";
import TaskToDo from "./TaskToDo";
import TaskComplete from "./TaskComplete";

class App extends React.Component {

  state={
    tasks:[
      {text:"clean driveway", completed:false, dateDue:"2019-11-30",dateDone:"", id:uuid()},
      {text:"paint landing", completed:false, dateDue:"2019-12-31", dateDone:"", id:uuid()},
      {text:"mend trousers", completed:false, dateDue:"2019-10-25", dateDone:"", id:uuid()},
      {text:"change dishwasher salt", completed:true, dateDue:"", dateDone:"2019-10-21", id:uuid()},
      {text:"buy crayons", completed:true, dateDue:"", dateDone:"2019-10-22", id:uuid()}
    ]
  }

  render() {
    return (
      <div>
        <br />
        <h2> Today's To Do List <i className="fas fa-pencil-alt"> </i> </h2>
        
        <div className="container">
          <div className="row" id="totalItem">
            <hr />
            <TotalItemStatus count={this.state.tasks.length} text="Tasks Still to Complete" />
            <TotalItemStatus count={2} text="Tasks Already Done!! " />           
          </div>

          <hr />
          <AddItem />
       
          <h5> Tasks Still to Complete </h5>
          {this.state.tasks.map(item => {
                 if (item.completed===false){
                 return <TaskToDo key={item.id} task={item.text} completed={item.completed} dateDue={item.dateDue}/>
                 }
              })}
          <br />
          <h5> Tasks Already Done!!</h5>
          <TaskComplete task="School Run" dateDone="2019-10-22" completed={true}/>
          <TaskComplete task="Morning Coffee" dateDone="2019-10-22" completed={true}/>
        </div>
        <br />
      </div>
     

    );


  }

}

export default App;
