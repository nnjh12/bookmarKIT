import React from 'react'

const DeleteIcon = (props) => {
    return (
        <span className="deleteIcon iconButton" onClick={props.deleteOnClick}>
            <i className="far fa-trash-alt"></i>
        </span>
    );
}

export default DeleteIcon;