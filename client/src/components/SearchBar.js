import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search1: "",
            search2: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => { this.props.handleFilter(this.state.search1, this.state.search2) });
    };
    handleOnClick = (button) => {
        if (this.state.search2 === button) {
            console.log("same button clicked")
            this.setState({ search2: "" }, () => this.props.handleFilter(this.state.search1, this.state.search2))
        } else {
            console.log("new button clicked")
            this.setState({ search2: button }, () => this.props.handleFilter(this.state.search1, this.state.search2))
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
                            className={tagEle.tag === this.props.search ? "btn active" : "btn"}
                            style={{ backgroundColor: this.props.search === tagEle.tag ? "green" : "" }}
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


