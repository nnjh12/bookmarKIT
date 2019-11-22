import React, { Component } from "react";
import Button from "./Button";
import DeleteIcon from "./DeleteIcon";

class TagButton extends Component {
    render() {
        return (
            <div className="tagContainer">
                <DeleteIcon deleteOnClick={this.props.deleteTag}></DeleteIcon>
                <Button>#{this.props.children}</Button>
            </div>
        );
    }
}

export default TagButton;
