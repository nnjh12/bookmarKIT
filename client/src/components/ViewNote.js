import React, { Component } from "react";
import API from "../utils/api";

import Button from "./Button"

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: []
        };
    }

    componentDidMount() {
        this.loadNote();
    }

    loadNote = () => {
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
                    <div className="mb-4" key={ele._id}>
                        <h3>{ele.note}</h3>
                        <p>{ele.date}</p>

                        {ele.tag.map((tagEle, index) => (
                            <Button key={ele._id + "-" + index}>#{tagEle}</Button>
                        ))}

                    </div>
                ))}

            </>


        );
    }
}

export default ViewNote;
