import React, { Component } from "react";
import Button from "./Button";
import DeleteIcon from "./DeleteIcon";
import Highlight from "./Highlight";


class TagButton extends Component {
    render() {
        return (
                <Button className="float-left">
                    <div>
                        <div className="float-right ml-3">
                            <DeleteIcon fontColor="white" deleteOnClick={this.props.deleteTag}></DeleteIcon>
                        </div>
                        <span>#</span><Highlight text={this.props.text} highlight={this.props.highlight}></Highlight>
                    </div>
                </Button>
        );
    }
}

export default TagButton;
