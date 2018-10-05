import React, { Component } from 'react';

class TodoAdd extends Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input
            className={
              this.props.invalid ?
              'is-invalid form-control' :
              'form-control'
            }
            onChange={this.props.onEnterTodo}
            type="text"
            value={this.props.todo}
          />
          <button
            className="btn btn-primary"
            onClick={this.props.onAddTodo}
          >
            Add
          </button>
          <div className="invalid-feedback">
            Please provide a text for todo.
          </div>
        </div>
      </form>
    );
  }
}

export default TodoAdd;