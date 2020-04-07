import React, { Component } from "react";
import Modal from "./Modal";
import InputNote from "./InputNote";

class AddBookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    handleShow = () => {
        this.setState({ show: true })
    };
    handleClose = () => {
        this.setState({ show: false })
    }
    render() {
        return (
            <div className="addNewField">
                <button
                    className="menuButton addNewButton"
                    onClick={this.handleShow}>
                    <span>ADD BOOKMARK</span>
                </button>
                <Modal show={this.state.show}>
                    <InputNote onClick={this.props.onClick} userAllTag={this.props.userAllTag} close={this.handleClose}></InputNote>
                </Modal>
            </div>
        );
    }
}

export default AddBookmark;