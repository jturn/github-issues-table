import React, { Component } from 'react';

const FilterDropdown = (props) => {
  return (
    <div className="filter-dropdown">
      <span className="filter-title"> Filter by {props.type} </span>
      <div className="filter-input-wrapper">
        <input 
          className="filter-input" 
          onChange={(e) => {this.props.handleFilterInput(e)}} 
          placeholder={`Filter ${props.type}s`}
        ></input>
      </div>
      <ul>
        {props.items.map((name) => {
          return <li>
                  <div 
                    className="filter-list-item" 
                    onClick={(e) => props.filterIssues(props.type, (props.type === 'label' ? name.label : name.author))}
                  >
                  {props.type === 'author' && <img className="filter-avatar" src={name.avatar}/>}
                  {props.type === 'label' && <div className="filter-color" style={{background: "#" + name.color}}></div>}
                    <div className="filter-name"> {props.type === 'author' ? name.author : name.label} </div>
                  </div>
                </li>
        })}
      </ul>
    </div>
  )
}

export default FilterDropdown;
