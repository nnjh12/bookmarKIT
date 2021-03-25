import React from 'react'

const DeleteIcon = (props) => {
    return (
        <span className="deleteIcon iconButton" onClick={props.deleteOnClick}>
            <i className={props.deleteIcon}></i>
        </span>
    );
}

export default DeleteIcon;