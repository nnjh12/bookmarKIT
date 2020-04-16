import React, { Component } from "react";

class CollapseAllButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseAll: false
        };
    }
    handleCollapseAll = () => {
        let collapseAll = !this.state.collapseAll
        this.setState({ collapseAll }, () => this.sendCollapseAll(this.state.collapseAll))
    }
    sendCollapseAll = (collapseAll) => {
        this.props.sendCollapseAll(collapseAll)
    }
    render() {
        return (
            <div className="collapseAllField">
                <button
                    className="menuButton collapseAllButton"
                    onClick={this.handleCollapseAll}>
                    <span>{this.state.collapseAll ? "EXPAND" : "COLLAPSE"}</span>
                </button>
            </div>
        );
    }
}

export default CollapseAllButton;