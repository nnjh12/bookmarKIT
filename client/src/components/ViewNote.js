import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";
var moment = require("moment");

class ViewNote extends Component {
    render() {
        return (
            <div className="noteContainer mb-4">
                <DeleteIcon deleteOnClick={this.props.deleteOnClick}></DeleteIcon>
                <h3>{this.props.note}</h3>
                <p>{moment(this.props.date).format("YYYY-MM-DD h:mm a")}</p>
            </div>
        );
    }
}

export default ViewNote;
