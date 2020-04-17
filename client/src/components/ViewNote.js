import React, { Component } from "react";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import CollapseIcon from "./CollapseIcon";
import NoteContainer from "./NoteContainer";
import TagButton from "./TagButton";
import AddTag from "./AddTag";


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
    }
    handleCollapse = () => {
        let collapse = !this.state.collapse
        this.setState({ collapse })
    }
    render() {
        return (
            <div className="viewNoteContainer">
                <div className="colorPanel"></div>
                <div className="contentPanel">
                    <div className="iconPanel">
                        <CollapseIcon collapse={this.state.collapse} handleCollapse={this.handleCollapse}></CollapseIcon>
                        <EditIcon></EditIcon>
                        <DeleteIcon deleteOnClick={this.props.deleteOnClick}></DeleteIcon>
                    </div>
                    <NoteContainer
                        bookmark={this.props.bookmark}
                        highlight={this.props.highlight}
                        collapse={this.state.collapse}
                        keyword={this.props.keyword}
                        date={this.props.date}>
                    </NoteContainer>
                    {!this.state.collapse &&
                        <div className="tagContainer">
                            {this.props.tag.sort().map((tagEle, index) => (
                                <TagButton
                                    key={index}
                                    text={tagEle}
                                    search={this.props.search}
                                    highlight={this.props.highlight}
                                    deleteTag={this.props.deleteTag}>
                                </TagButton>))}
                            <AddTag
                                inputId={this.props.inputId}
                                callBackId={this.props.callBackId}
                                callback={this.props.callback}
                                allTag={this.props.allTag}
                                userAllTag={this.props.userAllTag}>
                            </AddTag>
                        </div>
                    }
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
        );
    }
}


export default ViewNote;