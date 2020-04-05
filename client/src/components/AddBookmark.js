import React, { Component } from "react";
import PlusIcon from "./PlusIcon";

class AddBookmark extends Component {
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
            <div className="addNewField">
                <button
                    className="menuButton addNewButton"
                    onClick={this.handleActive}>
                    <span>CREATE NEW</span>
                </button>
            </div>
        );
    }
}

export default AddBookmark;