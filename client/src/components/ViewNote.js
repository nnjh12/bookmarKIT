import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";
import Highlight from "./Highlight";

var moment = require("moment");

class ViewNote extends Component {
    render() {
        return (
            <div className="noteContainer mb-4">
                <DeleteIcon deleteOnClick={this.props.deleteOnClick}></DeleteIcon>
                <h3><Highlight text={this.props.text} highlight={this.props.highlight}></Highlight></h3>
                <p>{moment(this.props.date).format("YYYY-MM-DD h:mm a")}</p>
            </div>
        );
    }
}

export default ViewNote;
