import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => { this.props.filterNote(this.state.searchKey) });
    };
    render() {
        return (
            <div>
                <i className="fas fa-search" aria-hidden="true"></i>
                <input className="form-control form-control-sm ml-3" type="text" placeholder="Search"
                    aria-label="Search" name="searchKey" onChange={this.handleInputChange}></input>
            </div>
        );
    }
}

export default SearchBar;


