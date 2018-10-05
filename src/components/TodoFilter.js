import React, { Component } from 'react';

class TodoFilter extends Component {
  render() {
    return (
      <button
        onClick={this.props.onFilter.bind(this, this.props.thisFilter)}
        className="btn btn-link"
        disabled={this.props.filter === this.props.thisFilter}
      >
        {this.props.thisFilter[0] + this.props.thisFilter.slice(1).toLowerCase()}
      </button>
    );
  }
}

export default TodoFilter;
