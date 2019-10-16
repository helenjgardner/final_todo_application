import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-primary" id="AddButton">Add</button>
                    <input type="text" placeholder="New task description" />
                </div>
            </div>

        );


    }

}

export default AddItem;