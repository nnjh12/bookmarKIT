import React, { Component } from "react";
import Highlight from "./Highlight";


class TagButton extends Component {
    render() {
        return (
            <div
                className="tagButton"
                style={{
                    backgroundColor: this.props.search.includes(this.props.text) ? "#f96738" : "",
                    color: this.props.search.includes(this.props.text) ? "#ffffff" : "",
                    borderColor: this.props.search.includes(this.props.text) ? "#f96738" : "",
                }}>
                <span>#</span><Highlight text={this.props.text} highlight={this.props.highlight}></Highlight>
            </div>
        );
    }
}

export default TagButton;
