import React, { Component } from "react";

class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleOnClick = (searchKey) => {
        console.log(this.props.search)
        this.props.onClick(searchKey)
    }
    render() {
        return (
            <div>
                {this.props.allTag.sort().map((tagEle, index) => (
                    <button
                        className={tagEle.tag === this.props.search ? "btn active" : "btn"}
                        style={{ backgroundColor: this.props.search === tagEle.tag ? "#ffbb33" : "" }}
                        key={index}
                        onClick={() => this.handleOnClick(tagEle.tag)}>
                        {tagEle.tag}
                    </button>
                ))}
            </div>
        );
    }
}

export default TagList;
