import React from "react";

const CollapseIcon = (props) => {
    return (
        <span className="collapseIcon iconButton" onClick={props.handleCollapse}>
                {props.collapse? <i className="fas fa-angle-double-down"></i> : <i className="fas fa-angle-double-up"></i>}
            </span>
    );
}

export default CollapseIcon;