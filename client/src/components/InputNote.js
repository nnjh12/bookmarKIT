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
                tag: "#my tag #example #hello"
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
        // const tagArray = this.state.tagUserInput.split("#").map(item => item.trim());
        // const filtered = tagArray.filter(item => item);

        const newNote = {
            bookmark: this.state.bookmarkUserInput,
            keyword: this.state.keywordUserInput,
            tag: newTag
        }
        this.props.onClick(newNote)
        this.setState({
            bookmarkUserInput: "",
            keywordUserInput: "",
            tagUserInput: ""
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
                {/* <input
                    type="text"
                    id="tag"
                    name="tagUserInput"
                    style={{ width: "100%" }}
                    onChange={this.handleInputChange}
                    value={this.state.tagUserInput}
                    placeholder={this.state.placeholder.tag}>
                </input> */}
                <TagInput
                    inputId="tag"
                    userAllTag={this.props.userAllTag}
                    callback={this.onSubmit}
                    disabled={this.state.bookmarkUserInput}
                    close={this.props.close}>
                </TagInput>

                {/* <input type="submit" value="Save" disabled={this.state.bookmarkUserInput ? false : true} onClick={this.onSubmit}></input> */}

                {/* <TextInput name="newNote" row="5" onChange={this.handleInputChange} value={this.state.newNote} placeholder={this.state.placeholder.note}>Note</TextInput>
                <TextInput name="newTag" row="2" onChange={this.handleInputChange} value={this.state.newTag} placeholder={this.state.placeholder.tag}>Tag</TextInput>
                <button disabled={this.state.newNote ? false : true} onClick={this.onSubmit}>save</button> */}
            </form>
        );
    }
}

export default InputNote;
