import React, { Component } from 'react';
import redX from '../red_x.svg';

class TodoItem extends Component {
  render() {
    return (
      <div>
        <span onClick={this.props.onChangeDone.bind(this, this.props.id)}>{this.props.text} </span>
        <img onClick={this.props.onRemoveTodo.bind(this, this.props.id)} alt="Remove todo" src={redX} height="10px" width="10px"/>
      </div>
    );
  }
}

export default TodoItem;
