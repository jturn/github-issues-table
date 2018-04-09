import React, { Component } from 'react';
import IssueListItem from './IssueListItem';
import IssueListHeader from './IssueListHeader';
import humanizeDate from './utils';
import FilterDropdown from './FilterDropdown';

class IssueTable extends Component {
  render() {
    return (
      <div>
        <ul className="issue-list">
        <IssueListHeader 
          authors={this.props.authors} 
          labels={this.props.labels} 
          openIssues={this.props.issues.length}
          handleClick={this.props.handleFilterClick}
        />
        {this.props.showAuthorDropdown && 
          <FilterDropdown 
            names={this.props.authors} 
            type="author" 
            handleFilterInput={this.props.handleFilterInput}
            filterIssues={this.props.filterIssues}
          />}
          {this.props.issues.map((issue) => {
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
    );
  }
}

export default IssueTable;
