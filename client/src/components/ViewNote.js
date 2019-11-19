import React, { Component } from "react";
import Button from "./Button";
import DeleteIcon from "./DeleteIcon";

class ViewNote extends Component {
    render() {
        return (
            <>
                <div className="mb-4">
                    <DeleteIcon deleteOnClick={this.props.deleteOnClick}></DeleteIcon>
                    <h3>{this.props.note}</h3>
                    <p>{this.props.date}</p>

                    {this.props.tag.map((tagEle, index) => (
                        <Button key={index}>#{tagEle}</Button>
                    ))}

                </div>


                {/* {this.props.allNote.map((ele, index) => (
                    <div className="mb-4" key={ele._id}>
                        <h3>{ele.note}</h3>
                        <p>{ele.date}</p>

                        {ele.tag.map((tagEle, index) => (
                            <Button key={ele._id + "-" + index}>#{tagEle}</Button>
                        ))}

                    </div>
                ))}
 */}
            </>


        );
    }
}

export default ViewNote;
