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
                    <a href={this.props.bookmark} target="_blank" rel="noopener noreferrer">
                        <h3><Highlight text={this.props.keyword} highlight={this.props.highlight}></Highlight></h3>
                    </a>
                </div>
                <p>{moment(this.props.date).format("YYYY-MM-DD h:mm a")}</p>
            </div>
        );
    }
}

export default ViewNote;
