import React from "react";
import "./TaskComplete.css";


class TaskComplete extends React.Component {
    state = { message: null };

    handleClick = (ev) => {
        // console.log(ev.currentTarget.dataset.div_id);
              
        this.props.deleteTaskDoneFunc(ev.currentTarget.dataset.div_id);
    }

    render() {
        return (

            <div className="row done">
                <div className="col-6 col-sm-1" key={this.props.id}
                    data-div_id={this.props.id}
                    onClick={this.handleClick}> 
                    <i className="fas fa-trash-alt"> 
                     </i>
                </div>
                <div className="col-6 col-sm-1">
                    <i className="fas fa-undo"></i>
                </div>

                <div className="col-12 col-sm-6 greyItalic" >
                {this.props.task}
                 </div>
                
                <div className="col-12 col-sm-4 greyItalic">
                    Done {this.props.dateDone}
                </div>
            </div >

        );

    }

}

export default TaskComplete;