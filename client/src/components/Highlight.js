import React, { Component } from "react";

const Highlight = ({text = '', highlight = ''}) => {

    const escapeRegExp = (str = '') => (
        str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
    );

    if (!highlight.trim()) {
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)

    return (
      <span>
         {parts.filter(part => part).map((part, i) => (
             regex.test(part) ? <mark key={i} style={{backgroundColor:"yellow"}}>{part}</mark> : <span key={i}>{part}</span>
         ))}
     </span>
    )
 }

export default Highlight;