import React, { Component } from "react";

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
        if (name === "tag") {
            const tagArray = value.split("#").map(item => item.trim());
            const filtered = tagArray.filter(item => item);
            this.setState({
                [name]: filtered
            });
        } else {
            this.setState({
                [name]: value
            });
        }
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
                <button onClick={() => this.props.onClick(this.state)}>save</button>
            </div>
        );
    }
}

export default InputNote;
