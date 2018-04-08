import React, { Component } from 'react';
import IssueListItem from './IssueListItem';

class IssueList extends Component {
  render() {
    return (
      <div>
        <ul className="issue-list">
          {this.props.issues.map((issue) => {
            return <IssueListItem
                      number={issue.number}
                      reporter={issue.user.login}
                      name={issue.title}
                      status={issue.state}
                      assignee={issue.assignee}
                      labels={issue.labels}
                      comments={issue.comments}
                  />
          })}
        </ul>
      </div>
    );
  }
}

export default IssueList;
