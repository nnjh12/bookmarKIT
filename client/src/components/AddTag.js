import React, { Component } from "react";

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
            this.createNewTagButton(event.target.value)
            let newTagList = [...this.state.newTagList, event.target.value]
            this.setState({ newTag: "", newTagList: newTagList })
        }
    }

    createNewTagButton = (label) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'tag');
        const span = document.createElement('span');
        span.innerHTML = label;
        // const closeIcon = document.createElement('i');
        // closeIcon.innerHTML = 'close';
        // closeIcon.setAttribute('class', 'material-icons');
        // closeIcon.setAttribute('data-item', label);
        div.appendChild(span);
        // div.appendChild(closeIcon);
        document.querySelector('.tagList').append(div)
        // return div;
    }

    clearTags = () => {
        document.querySelectorAll('.tag').forEach(tag => {
            tag.parentElement.removeChild(tag);
        });
    }

    // addTags = () => {
    //     clearTags();
    //     tags.slice().reverse().forEach(tag => {
    //         tagInputContainer.prepend(createTag(tag));
    //     });
    // }

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
                        disabled={this.state.newTag ? false : true}
                        onClick={this.onSubmit}>
                    </input>
                </div>
            </form>
        );
    }
}

export default AddTag;