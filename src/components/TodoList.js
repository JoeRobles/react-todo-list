import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.filtered.map(({id, text, done}) => (
            <li key={id} className={done ? 'done-task' : null}>
              <TodoItem
                id={id} text={text}
                done={done}
                onChangeDone={this.props.onChangeDone}
                onRemoveTodo={this.props.onRemoveTodo}
              />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default TodoList;
