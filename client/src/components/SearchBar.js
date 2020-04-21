import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search1: "",
            search2: []
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => { this.props.sendSearch1(this.state.search1) });
    };
    // handleOnClick = (button) => {
    //     if (this.state.search2.includes(button)) {
    //         console.log("same button clicked")
    //         let search2 = this.state.search2
    //         search2.splice(search2.indexOf(button), 1)
    //         this.setState({ search2 }, () => this.props.handleFilter(this.state.search1, this.state.search2))
    //     } else {
    //         console.log("new button clicked")
    //         let search2 = this.state.search2
    //         search2.push(button)
    //         this.setState({ search2 }, () => this.props.handleFilter(this.state.search1, this.state.search2))
    //     }
    // };
    render() {
        return (
            <div className="searchField">
                <div className="searchBox">
                    <i className="fas fa-search searchIcon" aria-hidden="true"></i>
                    <input className="searchInput" type="text" placeholder="Search"
                        aria-label="Search" name="search1" onChange={this.handleInputChange} value={this.state.search1}></input>
                </div>
            </div>
        );
    }
}

export default SearchBar;


