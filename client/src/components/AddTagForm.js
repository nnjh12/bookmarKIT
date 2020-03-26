import React from 'react'

const AddTagForm = (props) => {
    return (
        <form autoComplete="off">
            <input
                type="text"
                className="form-control"
                id={props.inputId}
                placeholder={props.placeholder}
                name="newTag"
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                value={props.value}>
            </input>
            <div className="suggestion">
                <ul id="suggestionList">
                    {props.suggestion.map((ele, index) =>
                        <li key={index} onClick={() => props.handleSuggestionClick(ele)} className={props.suggestionSelectIndex === index ? "active" : ""}>
                            {ele}
                        </li>
                    )}
                </ul>
            </div>
            <input
                className="btn btn-md btn-default m-0 px-3"
                type="submit"
                value="Add"
                disabled={props.newTag ? false : true}
                onClick={props.onSubmit}>
            </input>
        </form>
    );
}

export default AddTagForm;