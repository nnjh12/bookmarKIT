import React, { Component } from "react";

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

    onSubmit = (event) => {
        event.preventDefault()
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
            <form>
                <label htmlFor="note">Note</label>
                <textarea 
                    id="note"
                    name="newNote"
                    rows="3"
                    style={{width:"100%"}}
                    onChange={this.handleInputChange}
                    value={this.state.newNote}
                    placeholder={this.state.placeholder.note}>
                </textarea>
            
                <label htmlFor="tag">Tag</label>
                <input
                    type="text"
                    id="tag"
                    name="newTag"
                    style={{width:"100%"}}
                    onChange={this.handleInputChange}
                    value={this.state.newTag}
                    placeholder={this.state.placeholder.tag}>
                </input>
            
                <input type="submit" value="Save" disabled={this.state.newNote ? false : true} onClick={this.onSubmit}></input>

                {/* <TextInput name="newNote" row="5" onChange={this.handleInputChange} value={this.state.newNote} placeholder={this.state.placeholder.note}>Note</TextInput>
                <TextInput name="newTag" row="2" onChange={this.handleInputChange} value={this.state.newTag} placeholder={this.state.placeholder.tag}>Tag</TextInput>
                <button disabled={this.state.newNote ? false : true} onClick={this.onSubmit}>save</button> */}
            </form>
        );
    }
}

export default InputNote;
