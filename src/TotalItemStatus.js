import React from "react";
import "./TotalItemStatus.css";

class TotalItemStatus extends React.Component {
    render() {
        return (
            <div className="col-12 col-sm-6 red">
                {this.props.count} {this.props.text}
            </div>
        )
    }
}

export default TotalItemStatus;