import React from 'react'

const PlusIcon = (props) => {
    return (
        <span className="deleteIcon" onClick={props.plusOnClick}>
            {props.active ? <a><i class="fas fa-minus-circle"></i></a> : <a><i class="fas fa-plus-circle"></i></a>}
        </span>
    );
}

export default PlusIcon;