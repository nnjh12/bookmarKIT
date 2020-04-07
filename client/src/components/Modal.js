import React, { Component } from "react";

class Modal extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modalContainer">
                <div className="modalContent">
                    {this.props.children}
                </div>
            </div>
        )

    }
}

export default Modal;
