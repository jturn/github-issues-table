import React, { Component } from 'react';
import axios from 'axios';
import IssueList from './IssueList';
const REACT_ISSUES_ENDPOINT = 'https://api.github.com/repos/reactjs/redux/issues';

class TableContainer extends Component {
  constructor(){
    super()

    this.state = {
      issueData: []
    }
  }

  componentDidMount() {
    axios.get(REACT_ISSUES_ENDPOINT)
      .then(res => {
        this.setState({ issueData: res.data })
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="table-container">
        <IssueList issues={this.state.issueData}/>
      </div>
    );
  }
}

export default TableContainer;
