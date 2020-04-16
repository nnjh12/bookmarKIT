import React, { Component } from "react";

class CollapseButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
    }
    handleCollapse = () => {
        let collapse = !this.state.collapse
        this.setState({ collapse }, () => this.sendCollapse(this.state.collapse))
    }
    sendCollapse = (collapse) => {
        this.props.sendCollapse(collapse)
    }
    render() {
        return (
            <div className="collapseField">
                <button
                    className="menuButton collapseButton"
                    onClick={this.handleCollapse}>
                    <span>{this.state.collapse ? "EXPAND" : "COLLAPSE"}</span>
                </button>
            </div>
        );
    }
}

export default CollapseButton;