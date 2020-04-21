import React, { Component } from "react";

class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: "",
            suggestion: [],
            suggestionSelectIndex: -1
        };
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            suggestionSelectIndex: -1
        }, () => this.handleHashTag(this.state.newTag));
    }
    handleDataExchange = (newTag) => {
        console.log(this.state)
        this.props.handleDataExchange(newTag)
    }
    handleHashTag = (input) => {
        this.handleDataExchange(input)
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
    handleMouseOver = () => {
        this.setState({ suggestionSelectIndex: -1 })
    }
    handleSuggestionClick = (clicked) => {
        let updatedTag = this.state.newTag.substring(0, this.state.newTag.lastIndexOf('#')) + "#" + clicked
        this.setState({ newTag: updatedTag, suggestion: [], suggestionSelectIndex: -1 }, () => this.handleDataExchange(this.state.newTag))
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
                    this.props.onSubmit()
                } else {
                    this.handleSuggestionClick(suggestion[index])
                }
                break;
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    id={this.props.inputId}
                    placeholder={this.props.placeholder}
                    name="newTag"
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    value={this.state.newTag}>
                </input>
                <div className="suggestion">
                    <ul id="suggestionList">
                        {this.state.suggestion.map((ele, index) =>
                            <li key={index} onMouseOver={this.handleMouseOver} onClick={() => this.handleSuggestionClick(ele)} className={this.state.suggestionSelectIndex === index ? "active" : ""}>
                                {ele}
                            </li>
                        )}
                    </ul>
                </div>

                {/* <div className="formButtonContainer">
                    <input
                        className="formButton"
                        type="submit"
                        value="ADD"
                        disabled={this.props.disabled ? false : true}
                        onClick={this.onSubmit}>
                    </input>
                    <button className="formButton" onClick={this.props.close}>CLOSE</button>
                </div> */}
            </div>
        );
    }
}

export default TagInput;