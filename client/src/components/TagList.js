import React, { Component } from "react";

class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButton: "",
        };
    }
    handleOnClick = (selected) => {
        if (this.state.selectedButton === selected) {
            this.setState({ selectedButton: "" }, () => {
                console.log(this.state.selectedButton)
                this.props.filter(`#${this.state.selectedButton}`)
            })
        } else {
            this.setState({ selectedButton: selected }, () => {
                console.log(this.state.selectedButton)
                this.props.filter(`#${this.state.selectedButton}`)
            })
        }
    }
    render() {
        return (
            <div>
                {this.props.allTag.sort().map((tagEle, index) => (
                    <button
                        className={tagEle.tag === this.state.selectedButton ? "btn active" : "btn"}
                        style={{ backgroundColor: this.state.selectedButton === tagEle.tag ? "green" : "" }}
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
