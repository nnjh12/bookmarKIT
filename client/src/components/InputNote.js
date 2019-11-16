import React, { Component } from "react";
import API from "../utils/api";

import TextInput from "./TextInput"

class InputNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: "",
            tag: []
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        if ( name === "tag") {
            this.setState({
                [name]: value.split("#").map(item => item.trim())
            }, () => console.log(this.state));
        } else {
            this.setState({
                [name]: value
            }, () => console.log(this.state));
        }
    };

    postNote = () => {
        let data = {
            note: this.state.note,
            tag: this.state.tag
        }
        console.log(data)
        API.saveNote(data)
            .then(res => console.log("just saved"))
            .catch(err => console.log(err));
    };

    //   deleteBook = (id) => {
    //     API.deleteBook(id)
    //       .then(this.loadBook)
    //       .catch(err => console.log(err));
    //   };

    render() {
        return (
            <div>
                <TextInput name="note" row="5" onChange={this.handleInputChange}>Note</TextInput>
                <TextInput name="tag" row="2" onChange={this.handleInputChange}>Tag</TextInput>
                <button onClick={this.postNote}>save</button>
            </div>
        );
    }
}

export default InputNote;
