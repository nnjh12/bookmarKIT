import React, { Component } from "react";

class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: "",
            suggestion: [],
            suggestionSelectIndex: -1,
            placeholder: "Add new tags here."
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => this.handleHashTag(this.state.newTag));
    };

    onSubmit = () => {
        console.log("Note add button clicked")
        console.log(this.state.newTag)
        const tagArray = this.state.newTag.split("#").map(item => item.trim());
        const filtered = tagArray.filter(item => item);
        console.log(filtered)

        this.props.callback(filtered)
        this.setState({ newTag: "", suggestion:[], suggestionSelectIndex: -1 });
    }

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

    sendDataToParent = () => {
        this.props.callBack(this.state.newTag)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    id={this.props.inputId}
                    placeholder={this.state.placeholder}
                    name="newTag"
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    value={this.state.newTag}>
                </input>
                <div className="suggestion">
                    <ul id="suggestionList">
                        {this.state.suggestion.map((ele, index) =>
                            <li key={index} onClick={() => this.handleSuggestionClick(ele)} className={this.state.suggestionSelectIndex === index ? "active" : ""}>
                                {ele}
                            </li>
                        )}
                    </ul>
                </div>
                <input
                    className="btn btn-md btn-default m-0 px-3"
                    type="submit"
                    value="Add"
                    disabled={this.props.disabled ? false : true}
                    onClick={this.onSubmit}>
                </input>
            </div>
        );
    }
}

export default TagInput;