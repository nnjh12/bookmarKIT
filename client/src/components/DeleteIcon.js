import React from 'react'

const DeleteIcon = (props) => {
    return (
        <div className="deleteButton" onClick={props.deleteOnClick} data-value={props.dataValue}>
            <a><i class="far fa-trash-alt"></i></a>
        </div>
    );
}

export default DeleteIcon;