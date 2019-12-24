import React from 'react'

const SortButton = (props) => {
    return (
        <button
            className="sortButton"
            onClick={props.onClick}>
            <span>{props.sortField}</span><span>{props.arrow}</span>
        </button>
    );
}

export default SortButton;