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
        }, () => { this.props.handleFilter(this.state.search1, this.state.search2) });
    };
    handleOnClick = (button) => {
        if (this.state.search2.includes(button)) {
            console.log("same button clicked")
            let search2 = this.state.search2
            search2.splice(search2.indexOf(button), 1)
            this.setState({ search2 }, () => this.props.handleFilter(this.state.search1, this.state.search2))
        } else {
            console.log("new button clicked")
            let search2 = this.state.search2
            search2.push(button)
            this.setState({ search2 }, () => this.props.handleFilter(this.state.search1, this.state.search2))
        }
    };
    render() {
        return (
            <div>
                <div>
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <input className="form-control form-control-sm ml-3" type="text" placeholder="Search"
                        aria-label="Search" name="search1" onChange={this.handleInputChange} value={this.state.searchKey}></input>
                </div>

                <div>
                    {this.props.allTag.sort().map((tagEle, index) => (
                        <button
                            className={this.state.search2.includes(tagEle.tag) ? "btn active" : "btn"}
                            style={{
                                backgroundColor: this.state.search2.includes(tagEle.tag) ? "#ffbb33" : "",
                                opacity: this.props.filteredTag.includes(tagEle.tag) ? "1" : "0.5"
                            }}
                            key={index}
                            onClick={() => this.handleOnClick(tagEle.tag)}>
                            #{tagEle.tag}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default SearchBar;


