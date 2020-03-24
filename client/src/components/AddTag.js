import React, { Component } from "react";
import PlusIcon from "./PlusIcon";
import AddTagInput from "./AddTagInput";

class AddTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    handleActive = () => {
        this.setState({ active: true })
    };
    render() {
        return (
            <span className="addTag">
                {this.state.active ? <div><PlusIcon plusOnClick={this.handleActive}></PlusIcon><AddTagInput></AddTagInput></div> : <PlusIcon plusOnClick={this.handleActive}></PlusIcon>}
            </span>

        );
    }
}

export default AddTag;


