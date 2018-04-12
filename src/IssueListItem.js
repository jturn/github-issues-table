import React, { Component } from 'react';
import { FaCommentO, FaExclamationCircle } from 'react-icons/lib/fa';

const IssueListItem = (props) => {
  return (
    <li className="issue-list-item">
      <div className="list-item-icon"><FaExclamationCircle /></div>
      <div className="list-item-left-side">
        <a className="list-item-name" href={props.issueUrl}> {props.name} </a> 
        {props.labels.map((label) => {
          return <div 
                    className="list-item-label" 
                    style={{
                      background: "#" + label.color,
                      color: (label.color === '5319e7') ? 'white' : ''
                    }} 
                  > 
                  {label.name} 
                  </div>
        })}
        <div className="list-item-number"> #{props.number} opened {props.date} by {props.reporter} </div>
      </div>
      <div className="list-item-right-side">
        <img className="avatar" src="https://github.com/jturn.png?size=30"/>
          {props.comments ? 
          <a className="list-item-comments" href={props.issueUrl}><FaCommentO /> {props.comments}</a> :
          <div></div>}
      </div>

    </li>
  )
}

export default IssueListItem;
