import React from 'react'

const CollapseAllButton = (props) => {
    return (
        <div className="collapseAllField">
            <button
                className="menuButton collapseAllButton"
                onClick={props.handleCollapseAll}>
                <span>{props.collapseAll ? "EXPAND ALL" : "COLLAPSE ALL"}</span>
            </button>
        </div>
    );
}

export default CollapseAllButton;