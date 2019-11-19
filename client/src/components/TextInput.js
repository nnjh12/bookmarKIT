import React from 'react'

const TextInput = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
                {props.children}
            </label>
            <textarea
                className="form-control"
                name={props.name}
                id={props.id}
                rows={props.rows}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}

export default TextInput;