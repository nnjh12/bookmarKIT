import React, { Component } from "react";
import Button from "./Button";
import DeleteIcon from "./DeleteIcon";
import Highlight from "./Highlight";


class TagButton extends Component {
    render() {
        return (
            <div className="tagContainer">
                <DeleteIcon deleteOnClick={this.props.deleteTag}></DeleteIcon>
                <Button><span>#</span><Highlight text={this.props.text} highlight={this.props.highlight}></Highlight></Button>
            </div>
        );
    }
}

export default TagButton;
