import React, { Component } from 'react';
import AddTodo from './AddTodo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  newTodo = todo => {
    let copy = this.state.todos.slice();
    copy.push({ todo, checked: false });
    this.setState({ todos: copy });
  };

  flipChecked = index => {
    let copy = this.state.todos.slice();
    let found = copy.findIndex((t, i) => i === index);
    copy[found].checked = !copy[found].checked;
    this.setState({ todos: copy });
  };

  render() {
    return (
      <div className="App">
        <AddTodo newTodo={this.newTodo} />
        {this.state.todos.map((todo, i) => {
          return (
            <div key={`${todo}-${i}`}>
              <span>{todo.todo}</span>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => this.flipChecked(i)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
