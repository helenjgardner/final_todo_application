import React from "react";
import "./TotalItemStatus.css";

class TotalItemStatus extends React.Component {
    render() {
        return (
            <div className="row" id="totalItem">
                <div className="col-1">
                    {this.props.count}
                </div>
                <div className="col-6">
                    {this.props.text}
                </div>
            </div>

        )

    }
}

export default TotalItemStatus;