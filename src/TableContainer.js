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
      filteredIssues: [],
      filteredAuthors: [],
      filteredLabels: [],
      showAuthorDropdown: false,
      showLabelDropdown: false,
      filterInputValue: ''
    }
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleFilterInput = this.handleFilterInput.bind(this);
    this.filterIssues = this.filterIssues.bind(this);
  }

  handleFilterInput(input) {
    let query = input.target.value;
    console.log(query);
    if (this.state.showAuthorDropdown) {
      let newAuthorList = this.state.authors.filter((author) => {
        return author.author.indexOf(query) > -1
      })
      this.setState({filteredAuthors: newAuthorList})
    } else {
      let newLabelList = this.state.labels.filter((label) => {
        return label.label.indexOf(query) > -1
      })
      this.setState({filteredLabels: newLabelList})
    }
    this.setState({ filterInputValue: query })
  }

  handleFilterClick(filter) {
    console.log('filter click clicked', filter);
    if (filter === 'author') {
      this.setState({
        showAuthorDropdown: !this.state.showAuthorDropdown,
        showLabelDropdown: false
      })
    }
    if (filter === 'label') {
      this.setState({
        showLabelDropdown: !this.state.showLabelDropdown,
        showAuthorDropdown: false
      })
    }
  }

  filterIssues(type, filterBy) {
    let newList;

    if (type === 'author') {
      newList = this.state.issueData.filter((issue) => {
        return issue.user.login === filterBy
      })
    }
    if (type === 'label') {
      newList = this.state.issueData.filter((issue) => {
        return issue.labels.some((label) => {
          return label.name === filterBy;
        })
      })
    }
    this.setState({filteredIssues: newList});
  }

  componentDidMount() {
    axios.get(REDUX_ISSUES_ENDPOINT)
      .then(res => {
        let authors = new Set();
        let labels = new Set();
        let authorList = new Set();
        let labelList = new Set();

        //Filter response into arrays for unique authors and labels for use in filter dropdowns
        res.data.forEach((issue) => {
          if (!authors.has(issue.user.login)) {
            authorList.add({
                author: issue.user.login,
                avatar: issue.user.avatar_url
              })
          }
          authors.add(issue.user.login);

            issue.labels.forEach((label) => {
              if (!labels.has(label.name)) {
                labelList.add({
                  label: label.name,
                  color: label.color
                })
              }
            labels.add(label.name)
            })
        })
  
        this.setState({ 
          issueData: res.data,
          authors: [...authorList],
          labels: [...labelList],
          filteredIssues: res.data,
          filteredAuthors: [...authorList],
          filteredLabels: [...labelList]
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
          issues={this.state.filteredIssues}
          authors={this.state.filteredAuthors} 
          labels={this.state.filteredLabels} 
          handleFilterClick={this.handleFilterClick}
          handleFilterInput={this.handleFilterInput}
          filterIssues={this.filterIssues}
          showAuthorDropdown={this.state.showAuthorDropdown}
          showLabelDropdown={this.state.showLabelDropdown}
        />
      </div>
    );
  }
}

export default TableContainer;
