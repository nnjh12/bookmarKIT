import React, { Component } from "react";

class PlusIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: "",
            placeholder: "Add new tags here."
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => {
            this.handleAutoSuggestion(this.props.allTag, this.state.newTag.substring(1))
        });
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

    handleAutoSuggestion = (tagArray, input) => {
        let suggestion = tagArray.filter(i=>i.tag.startsWith(input))
        console.log(suggestion)
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
                    value={this.state.newTag}>
                </input>

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