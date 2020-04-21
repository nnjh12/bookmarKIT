import React, { Component } from "react";
import SortButton from "./SortButton";

class SortField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSortField: "date",
            ascending: false
        };
    }

    onClick = (field) => {
        console.log("sort on click")
        if (this.state.activeSortField === field) {
            this.setState({ ascending: !this.state.ascending }, () => {
                console.log(this.state)
                this.props.handleSort(this.state.activeSortField, this.state.ascending)
            })

        } else {
            this.setState({ activeSortField: field, ascending: true }, () => {
                console.log(this.state)
                this.props.handleSort(this.state.activeSortField, this.state.ascending)
            })
        }
    }

    render() {
        return (
            <div className="sortField">
                <SortButton
                    id="alphabetSort"
                    sortField="A-Z"
                    arrow={this.state.activeSortField === "alphabet" ? (this.state.ascending ? <i class="fas fa-sort-alpha-down"></i> : <i class="fas fa-sort-alpha-down-alt"></i>) : ""}
                    // ascending={this.state.activeSortField === "alphabet" ? this.state.ascending : true}
                    onClick={() => this.onClick("alphabet")}>
                </SortButton>
                <SortButton
                    id="dateSort"
                    sortField="DATE"
                    arrow={this.state.activeSortField === "date" ? (this.state.ascending ? <i class="fas fa-sort-numeric-down"></i> : <i class="fas fa-sort-numeric-down-alt"></i>) : ""}
                    // ascending={this.state.activeSortField === "alphabet" ? this.state.ascending : true}
                    onClick={() => this.onClick("date")}>
                </SortButton>
            </div>
        );
    }
}

export default SortField;