import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    state = {
        newTaskText: ""
    }

    updateTaskText = (event) => {
        this.setState({
            newTaskText: event.target.value
        })
    }

    handleClick = () => {
        this.props.addTaskFunc(this.state.newTaskText);
        this.setState({
            newTaskText: ""
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-9">
                    <div className="mt-3">
                        <input
                            id="addItemInput"
                            type="text"
                            size="85"
                            maxLength="85"
                            className="form-control"
                            placeholder="New task description (max length 85)"
                            value={this.state.newTaskText}
                            onChange={this.updateTaskText}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="mt-3 mb-3">
                        <button id="AddButton" className="btn btn-success" onClick={this.handleClick}>
                            Add to list
                       </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItem;