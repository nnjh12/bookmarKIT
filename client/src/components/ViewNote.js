import React from 'react';
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";


const ViewNote = (props) => {
    return (
        <div className="viewNoteContainer">
            <div className="colorPanel"></div>
            <div className="contentPanel">
                <div className="iconPanel">
                    <EditIcon></EditIcon>
                    <DeleteIcon deleteOnClick={props.deleteOnClick}></DeleteIcon>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default ViewNote;