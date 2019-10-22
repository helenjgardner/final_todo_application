import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-9">
                    <div className="mt-3 mb-3">
                        <input
                            id="addItemInput"
                            type="text"
                            className="form-control"
                            placeholder="New task description"
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