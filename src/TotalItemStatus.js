import React from "react";
import "./TotalItemStatus.css";

class TotalItemStatus extends React.Component {
    render() {
        return (
            // <div className="row" id="totalItem">
                <div className="col-12 col-sm-6 red">
                    {this.props.count} {this.props.text}
                </div>                
            // </div>

        )

    }
}

export default TotalItemStatus;