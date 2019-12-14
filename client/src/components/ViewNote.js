import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";
import Highlight from "./Highlight";

var moment = require("moment");

class ViewNote extends Component {
    render() {
        return (
            <div className="noteContainer mb-3">
                <div className="float-right">
                    <DeleteIcon fontColor="black" deleteOnClick={this.props.deleteOnClick}></DeleteIcon>
                </div>

                <div>
                    <h3><Highlight text={this.props.text} highlight={this.props.highlight}></Highlight></h3>

                </div>
                <p>{moment(this.props.date).format("YYYY-MM-DD h:mm a")}</p>
            </div>
        );
    }
}

export default ViewNote;
