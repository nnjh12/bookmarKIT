import React from 'react'

const DeleteIcon = (props) => {
    return (
        <div onClick={props.deleteOnClick}>
            <a><i className="fas fa-times"></i></a>
        </div>
    );
}

export default DeleteIcon;