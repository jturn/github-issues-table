import React, { Component } from 'react';
import FilterDropdown from './FilterDropdown';
import { FaExclamationCircle, FaAngleDown } from 'react-icons/lib/fa';

const IssueListHeader = (props) => {
  return (
    <li className="issue-list-item issue-list-header">
      <div className="issue-header-info">
        <FaExclamationCircle className="issue-header-icon"/>
        {props.openIssues} Open Issues
      </div>
      <div className="issue-header-filters">
        <div className="authors">
          <div className="issue-list-authors-filter-link" onClick={(e) => {props.handleClick('author')}}>Author <FaAngleDown/></div>
          {props.showAuthorDropdown && 
            <FilterDropdown 
              items={props.authors} 
              type="author" 
              handleFilterInput={props.handleFilterInput}
              filterIssues={props.filterIssues}
            />}
        </div>
        <div className="labels">
          <div className="issue-list-labels-filter-link" onClick={(e) => {props.handleClick('label')}}>Label<FaAngleDown/></div>
          {props.showLabelDropdown &&
            <FilterDropdown 
              items={props.labels} 
              type="label" 
              handleFilterInput={props.handleFilterInput}
              filterIssues={props.filterIssues}
            />}
        </div>
        <div className="issue-list-labels-filter-link">Sort</div>
      </div>
    </li>
  )
}

export default IssueListHeader;
