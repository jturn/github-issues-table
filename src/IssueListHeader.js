import React, { Component } from 'react';
import { FaExclamationCircle } from 'react-icons/lib/fa';

class IssueListHeader extends Component {
  render() {
    return (
      <li className="issue-list-item issue-list-header">
        <div className="issue-header-info">
          <FaExclamationCircle className="issue-header-icon"/>
          {this.props.openIssues} Open Issues
        </div>
        <div className="issue-header-filters">
          <div className="issue-list-authors-filter-link" onClick={(e) => {this.props.handleClick('author')}}>Author</div>
          <div className="issue-list-labels-filter-link" onClick={(e) => {this.props.handleClick('label')}}>Label</div>
          <div className="issue-list-labels-filter-link">Sort</div>
        </div>
      </li>
    );
  }
}

export default IssueListHeader;
