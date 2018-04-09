import React, { Component } from 'react';

class FilterDropdown extends Component {
  render() {
  let filterIssues = this.props.filterIssues;
  console.log('filter issues', filterIssues);
    return (
      <div className="filter-dropdown">
        <span> Filter by {this.props.type} </span>
        <input className="filter-input" onChange={(e) => {this.props.handleFilterInput(e)}}></input>
        <ul>
          {this.props.names.map((name) => {
            return <li className="filter-list-item">
                    <img className="filter-avatar" src={name.avatar}/>
                    <div className="filter-name" onClick={(e) => filterIssues(name.author)} > {name.author} </div>
                  </li>
          })}
        </ul>
      </div>
    );
  }
}

export default FilterDropdown;
