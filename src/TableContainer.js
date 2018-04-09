import React, { Component } from 'react';
import axios from 'axios';
import IssueTable from './IssueTable';
const REDUX_ISSUES_ENDPOINT = 'https://api.github.com/repos/reactjs/redux/issues';

class TableContainer extends Component {
  constructor(){
    super()

    this.state = {
      issueData: [],
      authors: [],
      labels: [],
      authorFilterOpen: false,
      labelFilterOpen: false
    }
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(filter){
    console.log('filter clicked', filter);
  }

  componentDidMount() {
    axios.get(REDUX_ISSUES_ENDPOINT)
      .then(res => {
        let authors = new Set();
        let authorList = new Set();
        let labelList = new Set();

        //Filter response into arrays for unique authors and labels for use in filter dropdowns
        res.data.forEach((issue) => {
          if (!authors.has(issue.user.login)) {
            authorList.add({
                author: issue.user.login,
                avatar: issue.user.avatar_url
              });
          }
          authors.add(issue.user.login);

          issue.labels.forEach((label) => {
            labelList.add(label.name);
          })
        })
  
        this.setState({ 
          issueData: res.data,
          authors: [...authorList],
          labels: [...labelList]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="table-container">
        <IssueTable 
          issues={this.state.issueData}
          authors={this.state.authors} 
          labels={this.state.labels} 
          handleFilterClick={this.handleFilterClick}
        />
      </div>
    );
  }
}

export default TableContainer;
