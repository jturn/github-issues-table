import React, { Component } from 'react';
import { FaCommentO, FaExclamationCircle } from 'react-icons/lib/fa';

class IssueListItem extends Component {
  render() {
    return (
      <li className="issue-list-item">
        <div className="list-item-icon"><FaExclamationCircle /></div>
        <div className="list-item-left-side">
          <a className="list-item-name" href={this.props.issueUrl}> {this.props.name} </a> 
          {this.props.labels.map((label) => {
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
          <div className="list-item-number"> #{this.props.number} opened {this.props.date} by {this.props.reporter} </div>
        </div>
        <div className="list-item-right-side">
          <img className="avatar" src="https://github.com/jturn.png?size=30"/>
            {this.props.comments ? 
            <a className="list-item-comments" href={this.props.issueUrl}><FaCommentO /> {this.props.comments}</a> :
            <div></div>}
        </div>

      </li>
    );
  }
}

export default IssueListItem;

//
