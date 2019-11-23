import React, { Component } from "react";

class PlusIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onSubmit = (id) => {
        console.log("tags add button clicked")
        console.log(this.state.newTag)
        const tagArray = this.state.newTag.split("#").map(item => item.trim());
        const filtered = tagArray.filter(item => item);
        console.log(filtered)

        this.props.addTag(id, filtered)
        // this.setState({ newTag: [] });
    }

    render() {
        return (
            <div className="md-form input-group mb-3">
                <input type="text" className="form-control" placeholder="Add new tag here" name="newTag" onChange={this.handleInputChange} value={this.state.newTag}></input>
                <div className="input-group-append">
                    <button className="btn btn-md btn-default m-0 px-3" type="button" id="MaterialButton-addon2" onClick={()=>this.onSubmit(this.props.passingID)}>Add</button>
                </div>
            </div>
        );
    }
}

export default PlusIcon;