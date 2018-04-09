import React, { Component } from 'react';
import IssueListItem from './IssueListItem';
import humanizeDate from './utils';

class IssueList extends Component {
  render() {
    return (
      <div>
        <ul className="issue-list">
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

export default IssueList;
