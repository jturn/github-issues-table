import React, { Component } from 'react';

class FilterDropdown extends Component {
  render() {
    let type = this.props.type;
    console.log('filter dropdown', this.props.names);
    return (
      <div className="filter-dropdown">
        <span> Filter by {type} </span>
        <input className="filter-input" onChange={(e) => {this.props.handleFilterInput(e)}}></input>
        <ul>
          {this.props.items.map((name) => {
            return <li>
                    <div 
                      className="filter-list-item" 
                      onClick={(e) => this.props.filterIssues(this.props.type, (type === 'label' ? name.label : name.author))}
                    >
                    {type === 'author' && <img className="filter-avatar" src={name.avatar}/>}
                    {type === 'label' && <div className="filter-color" style={{background: "#" + name.color}}></div>}
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
