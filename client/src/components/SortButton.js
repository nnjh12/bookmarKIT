import React, { Component } from "react";

class SortButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ascending: true,
            sortField: props.sortField,
            value: { alphabet: { true: "A-Z", false: "Z-A" }, date: { true: "0-9", false: "9-0" } }
        };
    }

    onClick = () => {
        if (this.state.ascending) {
            this.setState({ ascending: false })
        } else {
            this.setState({ ascending: true })
        }
        this.props.handleSort(this.state.sortField, this.state.ascending)
    }

    render() {
        return (
            <button onClick={this.onClick}>{this.state.value[this.state.sortField][this.state.ascending]}</button>
        );
    }
}

export default SortButton;