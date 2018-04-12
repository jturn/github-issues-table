import React, { Component } from 'react';
import FilterDropdown from './FilterDropdown';
import { FaExclamationCircle, FaAngleDown } from 'react-icons/lib/fa';

class IssueListHeader extends Component {
  render() {
    return (
      <li className="issue-list-item issue-list-header">
        <div className="issue-header-info">
          <FaExclamationCircle className="issue-header-icon"/>
          {this.props.openIssues} Open Issues
        </div>
        <div className="issue-header-filters">
          <div className="authors">
            <div className="issue-list-authors-filter-link" onClick={(e) => {this.props.handleClick('author')}}>Author <FaAngleDown/></div>
            {this.props.showAuthorDropdown && 
              <FilterDropdown 
                items={this.props.authors} 
                type="author" 
                handleFilterInput={this.props.handleFilterInput}
                filterIssues={this.props.filterIssues}
              />}
          </div>
          <div className="labels">
            <div className="issue-list-labels-filter-link" onClick={(e) => {this.props.handleClick('label')}}>Label<FaAngleDown/></div>
            {this.props.showLabelDropdown &&
              <FilterDropdown 
                items={this.props.labels} 
                type="label" 
                handleFilterInput={this.props.handleFilterInput}
                filterIssues={this.props.filterIssues}
              />}
          </div>
          <div className="issue-list-labels-filter-link">Sort</div>
        </div>
      </li>
    );
  }
}

export default IssueListHeader;
