import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-1 col-sm-2">
                    <button type="button" className="btn btn-success" id="AddButton">Add</button>
                </div>

                <div class="col-12 col-sm-10">
                    <input type="text" className="form-control addText" aria-label="eg"
                        aria-describedby="inputGroup-sizing-sm" placeholder="New task description"/>
                </div>
            </div >
        );


    }

}

export default AddItem;