import React, { Component } from 'react';

class IssueListItem extends Component {
  render() {
    return (
      <li className="issue-list-item">
        <div className="list-item-icon">Icon</div>
        <div className="list-item-left-side">
          <div className="list-item-name"> {this.props.name} </div> 
          {this.props.labels.map((label) => {
            return <div 
                      className="list-item-label" 
                      style={{
                        background: "#" + label.color,
                        color: (label.color === 'b60205') ? 'white' : ''
                      }} 
                    > 
                    {label.name} 
                    </div>
          })}
          <div className="list-item-number"> #{this.props.number} opened by {this.props.reporter}</div>
        </div>
        <div className="list-item-right-side">
          <img src="https://github.com/jturn.png?size=30"/>
          <img src="https://github.com/jturn.png?size=30"/>
            {this.props.comments ? <div className="list-item-comments">[] {this.props.comments}</div> : <div></div>}
        </div>

      </li>
    );
  }
}

export default IssueListItem;

//
