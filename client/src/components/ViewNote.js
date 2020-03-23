import React from 'react';
import DeleteIcon from "./DeleteIcon";


const ViewNote = (props) => {
    return (
        <div className="viewNoteContainer">
            <div className="colorPanel"></div>
            <div className="contentPanel">
                <div className="iconPanel">
                    <a><i class="far fa-edit"></i></a>
                    <DeleteIcon deleteOnClick={props.deleteOnClick}></DeleteIcon>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default ViewNote;