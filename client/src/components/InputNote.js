import React, { Component } from "react";

import TextInput from "./TextInput"

class InputNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNote: "",
            newTag: "",
            placeholder: {
                note: "Write your note here.",
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

    onSubmit = () => {
        const tagArray = this.state.newTag.split("#").map(item => item.trim());
        const filtered = tagArray.filter(item => item);

        const newNote = {
            note: this.state.newNote,
            tag: filtered
        }
        this.props.onClick(newNote)
        this.setState({ newNote: "", newTag: "" });
    }

    render() {
        return (
            <div>
                <TextInput name="newNote" row="5" onChange={this.handleInputChange} value={this.state.newNote} placeholder={this.state.placeholder.note}>Note</TextInput>
                <TextInput name="newTag" row="2" onChange={this.handleInputChange} value={this.state.newTag} placeholder={this.state.placeholder.tag}>Tag</TextInput>
                <button disabled={this.state.newNote ? false : true} onClick={this.onSubmit}>save</button>
            </div>
        );
    }
}

export default InputNote;
