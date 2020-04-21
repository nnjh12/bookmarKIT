import React from 'react'

const DeleteIcon = (props) => {
    return (
        <span className="deleteIcon" onClick={props.deleteOnClick}>
            <a><i class="far fa-trash-alt"></i></a>
        </span>
    );
}

export default DeleteIcon;