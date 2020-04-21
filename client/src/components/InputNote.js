import React, { Component } from "react";
import TagInput from "./TagInput";

class InputNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkUserInput: "",
            keywordUserInput: "",
            placeholder: {
                bookmark: "Add your bookmark here.",
                keyword: "Add your keyword here.",
            }
        };
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    onSubmit = (newTag) => {
        // event.preventDefault()
        const newNote = {
            bookmark: this.state.bookmarkUserInput,
            keyword: this.state.keywordUserInput,
            tag: newTag
        }
        this.props.onClick(newNote)
        this.setState({
            bookmarkUserInput: "",
            keywordUserInput: "",
        });
    }
    render() {
        return (
            <form className="addNewForm" autoComplete="off">
                <h6>Add New Bookmark</h6>
                <label htmlFor="bookmark">URL</label>
                <input
                    type="text"
                    id="bookmark"
                    name="bookmarkUserInput"
                    onChange={this.handleInputChange}
                    value={this.state.bookmarkUserInput}
                    placeholder={this.state.placeholder.bookmark}>
                </input>
                <label htmlFor="keyword">KEYWORD</label>
                <input
                    type="text"
                    id="keyword"
                    name="keywordUserInput"
                    onChange={this.handleInputChange}
                    value={this.state.keywordUserInput}
                    placeholder={this.state.placeholder.keyword}>
                </input>
                <label htmlFor="tag">TAG</label>
                <TagInput
                    inputId="tag"
                    userAllTag={this.props.userAllTag}
                    callback={this.onSubmit}
                    disabled={this.state.bookmarkUserInput}
                    close={this.props.close}>
                </TagInput>
            </form>
        );
    }
}

export default InputNote;
