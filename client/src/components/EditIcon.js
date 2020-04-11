import React from 'react'

const EditIcon = (props) => {
    return (
        <span className="editIcon iconButton" onClick={props.editOnClick}>
            <i className="far fa-edit"></i>
        </span>
    );
}

export default EditIcon;