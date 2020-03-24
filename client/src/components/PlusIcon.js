import React from 'react'

const PlusIcon = (props) => {
    return (
        <span className="deleteIcon" onClick={props.plusOnClick}>
            <a><i class="fas fa-plus-circle"></i></a>
        </span>
    );
}

export default PlusIcon;