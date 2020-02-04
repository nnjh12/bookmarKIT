import React, { Component } from "react";
import TagButton from "./TagButton";

class AddTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: "",
            newTagList: [],
            placeholder: "Add new tags here."
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onKeyDown = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            let newTagList = [...this.state.newTagList, event.target.value]
            this.setState({ newTag: "", newTagList: newTagList })
        }
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
            <form>
                <div className="tagInputContainer">
                    <div className="tagList">
                        {this.state.newTagList.map((ele, index) =>
                            <div key={index}>
                                <div>
                                    <div className="float-right ml-3" onClick={() => this.removeTag(index)}>
                                        <i className="fas fa-times"></i>
                                    </div>
                                    <span style={{ color: this.props.allTag.includes(ele) ? "red" : "black" }}>#{ele}</span>
                                </div>
                            </div>
                        )}

                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={this.state.placeholder}
                        name="newTag"
                        onChange={this.handleInputChange}
                        onKeyDown={this.onKeyDown}
                        value={this.state.newTag}>
                    </input>

                    <input
                        className="btn btn-md btn-default m-0 px-3"
                        type="submit"
                        value="Add"
                        disabled={this.state.newTagList.length === 0 ? true : false}
                        onClick={this.onSubmit}>
                    </input>
                </div>
            </form>
        );
    }
}

export default AddTag;