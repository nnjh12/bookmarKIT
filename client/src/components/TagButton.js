import React, { Component } from "react";
import API from "../utils/api";

import Button from "../components/Button"

class TagButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: []
        };
    }

    componentDidMount() {
        this.loadTag();
    }

    loadTag = () => {
        API.getAllNote()
            .then(res =>
                this.setState({ note: res.data }, () => {
                    console.log(this.state.note)
                })
            )
            .catch(err => console.log(err));
    };

    //   deleteBook = (id) => {
    //     API.deleteBook(id)
    //       .then(this.loadBook)
    //       .catch(err => console.log(err));
    //   };

    render() {
        return (
            <>
                {this.state.note.map((ele, index) => (
                    <Button>{ele.note}
                        
                    </Button>
                    
                ))}
                
            </>


        );
    }
}

export default TagButton;
