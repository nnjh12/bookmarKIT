import React from 'react'

const EditIcon = (props) => {
    return (
        <span className="editIcon" onClick={props.editOnClick}>
            <a><i class="far fa-edit"></i></a>
        </span>
    );
}

export default EditIcon;