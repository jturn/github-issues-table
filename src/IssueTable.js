import React, { Component } from 'react';
import IssueListItem from './IssueListItem';
import IssueListHeader from './IssueListHeader';
import humanizeDate from './utils';

const IssueTable = (props) => {
  return (
    <div>
      <ul className="issue-list">
      <IssueListHeader 
        authors={props.authors} 
        labels={props.labels} 
        openIssues={props.issues.length}
        handleClick={props.handleFilterClick}
        handleFilterInput={props.handleFilterInput}
        filterIssues={props.filterIssues}
        showAuthorDropdown={props.showAuthorDropdown}
        showLabelDropdown={props.showLabelDropdown}
      />
      {props.issues.map((issue) => {
        return <IssueListItem
                  number={issue.number}
                  reporter={issue.user.login}
                  date={humanizeDate(issue.created_at)}
                  name={issue.title}
                  status={issue.state}
                  assignee={issue.assignee}
                  labels={issue.labels}
                  comments={issue.comments}
                  issueUrl={issue.html_url}
              />
      })}
      </ul>
    </div>
  )
}

export default IssueTable;
