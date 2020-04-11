import React from 'react'

const PlusIcon = (props) => {
    return (
        <span className="plusIcon iconButton" onClick={props.plusOnClick}>
            {props.active ? <i className="fas fa-minus-circle"></i> : <i className="fas fa-plus-circle"></i>}
        </span>
    );
}

export default PlusIcon;