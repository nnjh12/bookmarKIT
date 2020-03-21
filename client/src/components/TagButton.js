import React, { Component } from "react";
import Button from "./Button";
import DeleteIcon from "./DeleteIcon";
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
            // <Button className="float-left" color={this.props.search.includes(this.props.text) ? "warning" : "default" }>
            //     <div>
            //         <div className="float-right ml-3">
            //             <DeleteIcon fontColor="white" deleteOnClick={this.props.deleteTag}></DeleteIcon>
            //         </div>
            //         <span>#</span><Highlight text={this.props.text} highlight={this.props.highlight}></Highlight>
            //     </div>
            // </Button>
        );
    }
}

export default TagButton;
