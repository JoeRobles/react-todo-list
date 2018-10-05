import React, { Component } from 'react';
import TodoFilter from './TodoFilter';

class TodoFilters extends Component {
  render() {
    return (
      <p>Show:
        <TodoFilter onFilter={this.props.onFilter} filter={this.props.filter} thisFilter="ALL" />,
        <TodoFilter onFilter={this.props.onFilter} filter={this.props.filter} thisFilter="COMPLETED" />,
        <TodoFilter onFilter={this.props.onFilter} filter={this.props.filter} thisFilter="ACTIVE" />
      </p>
    );
  }
}

export default TodoFilters;
