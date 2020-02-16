import React, { Component } from "react";

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "",
        };
    }

    onKeyDownArrow = (event) => {
        console.log(event.key)
        // if (event.key === "#") {
        //     event.preventDefault();
        //     this.handleAutoSuggestion(this.props.userAllTag, this.state.newTag)
        //     // let newTagList = [...this.state.newTagList, event.target.value.toLowerCase()]
        //     // this.setState({ newTag: "", newTagList: newTagList, suggestion: [] })
        // }
    }

    // handleKeyboardSelect = () => {
    //     document.addEventListener('keydown', function (event) {
    //         var len = ul.getElementsByTagName('li').length - 1;
    //         if (event.which === 40) {
    //             index++;
    //             //down 
    //             if (liSelected) {
    //                 removeClass(liSelected, 'selected');
    //                 next = ul.getElementsByTagName('li')[index];
    //                 if (typeof next !== undefined && index <= len) {

    //                     liSelected = next;
    //                 } else {
    //                     index = 0;
    //                     liSelected = ul.getElementsByTagName('li')[0];
    //                 }
    //                 addClass(liSelected, 'selected');
    //                 console.log(index);
    //             }
    //             else {
    //                 index = 0;

    //                 liSelected = ul.getElementsByTagName('li')[0];
    //                 addClass(liSelected, 'selected');
    //             }
    //         }
    //         else if (event.which === 38) {

    //             //up
    //             if (liSelected) {
    //                 removeClass(liSelected, 'selected');
    //                 index--;
    //                 console.log(index);
    //                 next = ul.getElementsByTagName('li')[index];
    //                 if (typeof next !== undefined && index >= 0) {
    //                     liSelected = next;
    //                 } else {
    //                     index = len;
    //                     liSelected = ul.getElementsByTagName('li')[len];
    //                 }
    //                 addClass(liSelected, 'selected');
    //             }
    //             else {
    //                 index = 0;
    //                 liSelected = ul.getElementsByTagName('li')[len];
    //                 addClass(liSelected, 'selected');
    //             }
    //         }
    //     }, false);

    //     function removeClass(el, className) {
    //         if (el.classList) {
    //             el.classList.remove(className);
    //         } else {
    //             el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    //         }
    //     };

    //     function addClass(el, className) {
    //         if (el.classList) {
    //             el.classList.add(className);
    //         } else {
    //             el.className += ' ' + className;
    //         }
    //     };


    // }

    render() {
        return (
            <div className="suggestion">
                <input onKeyDown={this.onKeyDownArrow}></input>
                <ul id="suggestionList">
                    {this.props.suggestion.map((ele, index) =>
                        <li key={index} onClick={() => this.props.handleSuggestionClick(ele)}>
                            {ele}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default DropDown;