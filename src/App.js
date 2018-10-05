import React, { Component } from 'react';
import uuid from 'uuid';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todos: [],
      filter: 'ALL',
      filtered: [],
      invalid: false
    };
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onEnterTodo = this.onEnterTodo.bind(this);
    this.onRemoveTodo = this.onRemoveTodo.bind(this);
    this.onChangeDone = this.onChangeDone.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  onEnterTodo(event) {
    this.setState({
      todo: event.target.value,
      invalid: false
    });
  }

  onAddTodo(event) {
    event.preventDefault();
    const todos = [
      ...this.state.todos,
      {
        id: uuid(),
        text: this.state.todo,
        done: false
      }
    ];

    if (this.state.todo) {
      this.setState({
        todos,
        filtered: todos,
        todo: ''
      });
    } else {
      this.setState({
        invalid: true
      });
    }
  }

  onChangeDone(idTodo) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === idTodo) {
        return {
          ...todo,
          done: !todo.done
        }
      } else {
        return todo;
      }
    });

    this.setState({
      todos,
      filtered: todos
    });
  }

  onRemoveTodo(idTodo) {
    const todos = this.state.todos.filter(({id}) => (
      id !== idTodo
    ));

    this.setState({
      todos,
      filtered: todos
    });
  }

  filterBy(filter) {
    this.setState({
      filter
    });

    switch (filter) {
      case 'ALL':
        return this.state.todos;
      case 'COMPLETED':
        return this.state.todos.filter((todo) => todo.done === true);
      case 'ACTIVE':
        return this.state.todos.filter((todo) => todo.done === false);
      default:
        return this.state.todos;
    }
  }

  onFilter(filterBy) {
    const filtered = this.filterBy(filterBy);
    this.setState({
      filtered
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="col-lg-12">
            <TodoAdd
              invalid={this.state.invalid}
              onEnterTodo={this.onEnterTodo}
              todo={this.state.todo}
              onAddTodo={this.onAddTodo}
            />
            <TodoList
              filtered={this.state.filtered}
              onRemoveTodo={this.onRemoveTodo}
              onChangeDone={this.onChangeDone}
            />
            <TodoFilters
              onFilter={this.onFilter}
              filter={this.state.filter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
