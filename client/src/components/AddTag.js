import React, { Component } from "react";
import PlusIcon from "./PlusIcon";

class AddTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            newTag: "",
            suggestion: [],
            suggestionSelectIndex: -1,
            placeholder: "Add new tags here."
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            suggestionSelectIndex: -1
        }, () => this.handleHashTag(this.state.newTag));
    };

    handleActive = () => {
        let active = !this.state.active
        this.setState({ active })
    };

    onSubmit = () => {
        console.log("tags add button clicked")
        console.log(this.state.newTag)
        const tagArray = this.state.newTag.split("#").map(item => item.trim());
        const filtered = tagArray.filter(item => item);
        console.log(filtered)

        this.props.callback(this.props.callBackId, filtered)
        this.setState({ active: false, newTag: "", suggestion: [], suggestionSelectIndex: -1 });
    }

    // onKeyDownHashTag = (event) => {
    //     if (event.key === "#") {
    //         console.log(event.target.value)
    //         event.preventDefault();
    //         // this.handleAutoSuggestion(this.props.userAllTag, this.state.newTag)
    //         // let newTagList = [...this.state.newTagList, event.target.value.toLowerCase()]
    //         // this.setState({ newTag: "", newTagList: newTagList, suggestion: [] })
    //     }
    // }

    handleHashTag = (input) => {
        let currentTag = input.substring(input.lastIndexOf('#') + 1, input.length)
        console.log(currentTag)
        this.handleAutoSuggestion(this.props.userAllTag, currentTag)
    }

    handleAutoSuggestion = (tagArray, input) => {
        let suggestion;
        if (input === "") {
            suggestion = [];
        } else {
            suggestion = tagArray.filter(i => i.tag.startsWith(input)).map(ele => ele.tag);
            suggestion = suggestion.filter(ele => !this.props.currentAllTag.includes(ele));
        }
        console.log(suggestion)
        this.setState({ suggestion }, () => { console.log(this.state.suggestion) })
    }

    handleSuggestionClick = (clicked) => {
        let updatedTag = this.state.newTag.substring(0, this.state.newTag.lastIndexOf('#')) + "#" + clicked
        this.setState({ newTag: updatedTag, suggestion: [], suggestionSelectIndex: -1 }, () => console.log(this.state))
        document.getElementById(this.props.inputId).focus();
    }

    handleKeyDown(e) {
        console.log(e.keyCode)
        let index = this.state.suggestionSelectIndex;
        let suggestion = this.state.suggestion
        console.log(index)
        switch (e.keyCode) {
            default:
                break;
            case 40:
                e.preventDefault();
                console.log('case40')
                if (index > suggestion.length - 2) {
                    index = 0;
                } else {
                    index++;
                }
                console.log(suggestion[index])
                this.setState({ suggestionSelectIndex: index })
                break;
            case 38:
                e.preventDefault();
                console.log('case38')
                if (index < 1) {
                    index = suggestion.length - 1;
                } else {
                    index--;
                }
                console.log(suggestion[index])
                this.setState({ suggestionSelectIndex: index })

                break;
            case 13:
                e.preventDefault();
                console.log('case13')
                if (this.state.suggestionSelectIndex === -1) {
                    this.onSubmit()
                } else {
                    this.handleSuggestionClick(suggestion[index])
                }
                break;
        }
    }

    render() {
        return (
            <div className="addTagContainer">
                <PlusIcon active={this.state.active} plusOnClick={this.handleActive}></PlusIcon>
                {this.state.active &&
                    <form autoComplete="off">
                        <input className="addTagInput"
                            type="text"
                            id={this.props.inputId}
                            placeholder={this.state.placeholder}
                            name="newTag"
                            onChange={this.handleInputChange}
                            onKeyDown={this.handleKeyDown.bind(this)}
                            value={this.state.newTag}>
                        </input>
                        <input
                            type="submit"
                            value="ADD"
                            disabled={this.state.newTag ? false : true}
                            onClick={this.onSubmit}>
                        </input>
                        <div className="suggestion">
                            <ul id="suggestionList">
                                {this.state.suggestion.map((ele, index) =>
                                    <li key={index} onClick={() => this.handleSuggestionClick(ele)} className={this.state.suggestionSelectIndex === index ? "active" : "inactive"}>
                                        {ele}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </form>}
            </div>

        );
    }
}

export default AddTag;