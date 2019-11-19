import React from 'react'
import { MDBBtn } from "mdbreact";

const TagButton = (props) => {
    return (
        <>
            <MDBBtn
                rounded color={props.color}
                className={props.className}
                id={props.id}
                onClick={props.onClick}>
                {props.children}
            </MDBBtn>
        </>
    );
}

export default TagButton;