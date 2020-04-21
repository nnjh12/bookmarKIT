import React from 'react'

const SortButton = (props) => {
    return (
        <button
            className="menuButton sortButton"
            id={props.id}
            onClick={props.onClick}>
            <span>{props.sortField}</span><span>{props.arrow}</span>
        </button>
    );
}

export default SortButton;