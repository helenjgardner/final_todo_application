import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    render() {
        return (
            <div className="row" id="totalItem">
                <div className="col-1">
                    <button type="button" className="btn btn-primary" id="AddButton">Add</button>
                </div>
                <div className="col-11">
                    <input type="text" defaultValue="New item" />
                </div>
            </div>

        );


    }

}

export default AddItem;