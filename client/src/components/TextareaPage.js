import React from 'react'

const TextareaPage = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
                {props.children}
            </label>
            <textarea
                className="form-control"
                id={props.id}
                rows={props.rows}
            />
        </div>
    )
}

export default TextareaPage;