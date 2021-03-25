import React, { Component } from "react";
import TagInput from "./TagInput";

class InputNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkUserInput: "",
            keywordUserInput: "",
            tagUserInput: "",
            placeholder: {
                bookmark: "Add your bookmark here.",
                keyword: "Add your keyword here.",
                tag: "#example #new tag #addition "
            }
        };
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleDataExchange = (childNewTag) => {
        this.setState({ tagUserInput: childNewTag }, () => console.log(this.state.tagUserInput))
    }
    onSubmit = () => {
        console.log("Bookmark Add button clicked")
        const tagArray = this.state.tagUserInput.split("#").map(item => item.trim());
        const filtered = tagArray.filter(item => item);

        const newNote = {
            bookmark: this.state.bookmarkUserInput,
            keyword: this.state.keywordUserInput,
            tag: filtered
        }
        this.props.handleSubmit(newNote)
        this.setState({
            bookmarkUserInput: "",
            keywordUserInput: "",
            tagUserInput: ""
        }, this.props.close);
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
                    placeholder={this.state.placeholder.tag}
                    inputId="tag"
                    userAllTag={this.props.userAllTag}
                    handleDataExchange={this.handleDataExchange}
                    onSubmit={this.onSubmit}>
                </TagInput>
                <div className="formButtonContainer">
                    <input
                        className="formButton"
                        type="submit"
                        value="SAVE"
                        disabled={this.state.bookmarkUserInput ? false : true}
                        onClick={this.onSubmit}>
                    </input>
                    <button className="formButton" onClick={this.props.close}>CANCEL</button>
                </div>
            </form>
        );
    }
}

export default InputNote;
