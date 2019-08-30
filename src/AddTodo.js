import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.newTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Add Todo</p>
        <input value={this.state.todo} onChange={this.handleChange} />
      </form>
    );
  }
}
