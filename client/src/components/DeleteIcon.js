import React from 'react'

const DeleteIcon = (props) => {
    return (
        <div className="deleteButton" onClick={props.deleteOnClick} data-value={props.dataValue}>
            <a href="#"><i className="fas fa-times"></i></a>
        </div>
    );
}

export default DeleteIcon;