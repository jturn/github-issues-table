import React, { Component } from 'react';

class FilterDropdown extends Component {
  render() {
    let type = this.props.type;

    return (
      <div className="filter-dropdown">
        <span> Filter by {type} </span>
        <input className="filter-input" onChange={(e) => {this.props.handleFilterInput(e)}}></input>
        <ul>
          {this.props.names.map((name) => {
            return <li>
                    <div 
                      className="filter-list-item" 
                      onClick={(e) => this.props.filterIssues((type === 'label' ? name.label : name.author), this.props.type)}
                    >
                    {type === 'author' && <img className="filter-avatar" src={name.avatar}/>}
                    {type === 'label' && <div className={`filter-label-color ${name.color}`}></div>}
                      <div className="filter-name"> {type === 'author' ? name.author : name.label} </div>
                    </div>
                  </li>
          })}
        </ul>
      </div>
    );
  }
}

export default FilterDropdown;
