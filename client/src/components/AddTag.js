import React, { Component } from "react";
import TagButton from "./TagButton";

class AddTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: "",
            newTagList: [],
            suggestion: [],
            placeholder: "Add new tags here."
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state.newTag)
            this.handleAutoSuggestion(this.props.userAllTag, this.state.newTag)
        });
    };

    onKeyDown = (event) => {
        if (event.key === "#") {
            event.preventDefault();
            this.handleAutoSuggestion(this.props.userAllTag, this.state.newTag)
            // let newTagList = [...this.state.newTagList, event.target.value.toLowerCase()]
            // this.setState({ newTag: "", newTagList: newTagList, suggestion: [] })
        }
    }


    handleAutoSuggestion = (tagArray, input) => {
        let suggestion;
        if (this.state.newTag === "") {
            suggestion = [];
        } else {
            suggestion = tagArray.filter(i => i.tag.startsWith(input)).map(ele => ele.tag);
        }
        console.log(suggestion)
        this.setState({ suggestion }, () => { console.log(this.state.suggestion) })
    }

    handleSuggestionClick = (clicked) => {
        let newTagList = [...this.state.newTagList, clicked]
        this.setState({ newTag: "", newTagList: newTagList, suggestion: [] })
    }

    removeTag = (index) => {
        let newTagList = [...this.state.newTagList.slice(0, index), ...this.state.newTagList.slice(index + 1)];
        this.setState({ newTagList })
    }

    onSubmit = () => {
        console.log("tags add button clicked")
        console.log(this.state.newTag)
        const TagList = this.state.newTagList.map(item => item.trim());
        console.log(TagList)

        this.props.callback(this.props.callBackId, TagList)
        this.setState({ newTag: "", newTagList: [] });
    }

    render() {
        return (
            <div className="tagInputContainer">
                <div className="tagList">
                    {this.state.newTagList.map((ele, index) =>
                        <div key={index}>
                            <span style={{ color: this.props.allTag.includes(ele) ? "red" : "black" }}>#{ele}</span>
                        </div>
                    )}
                </div>
                <form>
                    {/* <span class="input-group-addon">#</span> */}
                    <input
                        type="text"
                        // className="form-control"
                        placeholder={this.state.placeholder}
                        name="newTag"
                        onChange={this.handleInputChange}
                        onKeyDown={this.onKeyDown}
                        value={this.state.newTag}>
                    </input>
                    <div className="suggestion">
                        {this.state.suggestion.map((ele, index) =>
                            <div key={index} onClick={() => this.handleSuggestionClick(ele)}>
                                {ele}
                            </div>
                        )}
                    </div>
                    <input
                        // className="btn btn-md btn-default m-0 px-3"
                        type="submit"
                        value="Add"
                        disabled={this.state.newTagList.length === 0 ? true : false}
                        onClick={this.onSubmit}>
                    </input>
                </form>

            </div>

        );
    }
}

export default AddTag;