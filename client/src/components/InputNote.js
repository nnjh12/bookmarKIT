import React, { Component } from "react";

import TextInput from "./TextInput"

class InputNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNote: "",
            newTag: []
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
        this.setState({ newNote: "", newTag: [] });
    }

    render() {
        return (
            <div>
                <TextInput name="newNote" row="5" onChange={this.handleInputChange} value={this.state.newNote}>Note</TextInput>
                <TextInput name="newTag" row="2" onChange={this.handleInputChange} value={this.state.newTag}>Tag</TextInput>
                <button onClick={this.onSubmit}>save</button>
            </div>
        );
    }
}

export default InputNote;
