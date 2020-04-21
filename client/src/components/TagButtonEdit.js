import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";


class TagButtonEdit extends Component {
    render() {
        return (
            <div className="tagButton">
                <div className="float-right ml-2">
                    <DeleteIcon deleteIcon="fas fa-times" deleteOnClick={this.props.deleteTag}></DeleteIcon>
                </div>
                <span>#{this.props.text}</span>
            </div>
        );
    }
}

export default TagButtonEdit;
