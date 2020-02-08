import React, { Component } from "react";

class PlusIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: "",
            suggestion: [],
            placeholder: "Add new tags here."
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => this.handleHashTag(this.state.newTag));
    };

    onSubmit = () => {
        console.log("tags add button clicked")
        console.log(this.state.newTag)
        const tagArray = this.state.newTag.split("#").map(item => item.trim());
        const filtered = tagArray.filter(item => item);
        console.log(filtered)

        this.props.callback(this.props.callBackId, filtered)
        this.setState({ newTag: "" });
    }

    // onKeyDownHashTag = (event) => {
    //     if (event.key === "#") {
    //         console.log(event.target.value)
    //         event.preventDefault();
    //         // this.handleAutoSuggestion(this.props.userAllTag, this.state.newTag)
    //         // let newTagList = [...this.state.newTagList, event.target.value.toLowerCase()]
    //         // this.setState({ newTag: "", newTagList: newTagList, suggestion: [] })
    //     }
    // }

    handleHashTag = (input) => {
        let currentTag = input.substring(input.lastIndexOf('#') + 1, input.length)
        console.log(currentTag)
        this.handleAutoSuggestion(this.props.userAllTag, currentTag)
    }

    handleAutoSuggestion = (tagArray, input) => {
        let suggestion;
        if (input === "") {
            suggestion = [];
        } else {
            suggestion = tagArray.filter(i => i.tag.startsWith(input)).map(ele => ele.tag);
        }
        console.log(suggestion)
        this.setState({ suggestion }, () => { console.log(this.state.suggestion) })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder={this.state.placeholder}
                    name="newTag"
                    onChange={this.handleInputChange}
                    // onKeyDown={this.onKeyDownHashTag}
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
                    className="btn btn-md btn-default m-0 px-3"
                    type="submit"
                    value="Add"
                    disabled={this.state.newTag ? false : true}
                    onClick={this.onSubmit}>
                </input>
            </form>
        );
    }
}

export default PlusIcon;