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
        let active = !this.state.active
        this.setState({ active })
    };
    render() {
        return (
            <span className="addTag">
                <PlusIcon active={this.state.active} plusOnClick={this.handleActive}></PlusIcon>
                {this.state.active &&
                    <AddTagInput
                        inputId={this.props.inputId}
                        callBackId={this.props.callBackId}
                        callback={this.props.callback}
                        allTag={this.props.allTag}
                        userAllTag={this.props.userAllTag}>
                    </AddTagInput>}
            </span>

        );
    }
}

export default AddTag;


