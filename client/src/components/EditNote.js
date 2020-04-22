import React, { Component } from "react";
import TagButtonEdit from "./TagButtonEdit";
import AddTag from "./AddTag";
var moment = require("moment");

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkUserInput: props.bookmark,
            keywordUserInput: props.keyword,
            tag: props.tag,
            newTag: []
        };
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => console.log(this.state));
    };
    deleteTag = (tag) => {
        let updatedTag = this.state.tag.filter(ele => ele !== tag)
        this.setState({ tag: updatedTag }, () => { console.log(this.state.tag) })
    }
    addTag = (id, newTag) => {
        this.setState({ newTag }, () => { console.log(this.state.newTag) })
    };
    onSubmit = () => {
        console.log("Edit Save button clicked")
        const updatedTag = this.state.tag.concat(this.state.newTag)
        const updatedNote = {
            bookmark: this.state.bookmarkUserInput,
            keyword: this.state.keywordUserInput,
            tag: updatedTag
        }
        this.props.handleEditSubmit(this.props.noteId, updatedNote)
        this.props.handleEditCancel()
    }
    render() {
        return (
            <div className="viewNoteContainer">
                <div className="colorPanel"></div>
                <div className="contentPanel">
                    {/* <div className="iconPanel">
                        <DeleteIcon deleteIcon="far fa-trash-alt" deleteOnClick={this.props.deleteOnClick}></DeleteIcon>
                    </div> */}
                    <div className="noteContainer">
                        <input
                            className="editInput"
                            type="text"
                            name="bookmarkUserInput"
                            onChange={this.handleInputChange}
                            value={this.state.bookmarkUserInput}
                            autoFocus>
                        </input>
                        <input
                            className="editInput"
                            type="text"
                            name="keywordUserInput"
                            onChange={this.handleInputChange}
                            value={this.state.keywordUserInput}>
                        </input>
                        <p className="date">{moment(this.props.date).format("YYYY-MM-DD h:mm a")}</p>
                    </div>

                    <div className="tagContainer">
                        {this.state.tag.sort().map((tagEle, index) => (
                            <TagButtonEdit
                                key={index}
                                text={tagEle}
                                deleteTag={() => this.deleteTag(tagEle)}>
                            </TagButtonEdit>))}
                        {this.state.newTag.map((tagEle, index) => (
                            <TagButtonEdit
                                key={index}
                                text={tagEle}
                                deleteTag={() => this.deleteTag(tagEle)}>
                            </TagButtonEdit>))}
                        <AddTag
                            inputId={this.props.inputId}
                            callBackId={this.props.callBackId}
                            callback={this.addTag}
                            allTag={this.props.allTag}
                            userAllTag={this.props.userAllTag}
                            currentAllTag={this.props.tag}>
                        </AddTag>
                    </div>
                    {/* <div style={{ clear: 'both' }}></div> */}

                    <div className="editMenuContainer">
                        <input
                            className="editMenuButton"
                            type="submit"
                            value="SAVE"
                            onClick={this.onSubmit}>
                        </input>

                        <button
                            className="editMenuButton"
                            onClick={this.props.handleEditCancel}>
                            <span>CANCEL</span>
                        </button>
                    </div>

                    <div style={{ clear: 'both' }}></div>


                </div>
            </div>
        );
    }
}


export default EditNote;