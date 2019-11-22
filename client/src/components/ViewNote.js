import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";

class ViewNote extends Component {
    render() {
        return (
            <div className="noteContainer mb-4">
                <DeleteIcon deleteOnClick={this.props.deleteOnClick}></DeleteIcon>
                <h3>{this.props.note}</h3>
                <p>{this.props.date}</p>
            </div>
        );
    }
}

export default ViewNote;
