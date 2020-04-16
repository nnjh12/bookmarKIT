import React, { Component } from "react";
import Highlight from "./Highlight";

var moment = require("moment");

class NoteContainer extends Component {
    render() {
        return (
            <div className="noteContainer">
                    <a className="bookMark" href={this.props.bookmark} target="_blank" rel="noopener noreferrer">
                        <Highlight text={this.props.bookmark} highlight={this.props.highlight}></Highlight>
                    </a>
                    {!this.props.collapseAll && <p className="keyWord"><Highlight text={this.props.keyword} highlight={this.props.highlight}></Highlight></p> }
                    {!this.props.collapseAll && <p className="date">{moment(this.props.date).format("YYYY-MM-DD h:mm a")}</p> }                   
            </div>
        );
    }
}

export default NoteContainer;
