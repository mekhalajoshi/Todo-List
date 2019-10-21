import React, { Component } from 'react';
import List from './List';
import Form from './Form';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.initialState = {
      todoList: [],
      completedList: [],
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    this.markDone = this.markDone.bind(this);
    this.moveToTodo = this.moveToTodo.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    });
  }

  handelSubmit = (item) => {
    this.setState({
      todoList: [...this.state.todoList, item],
      item: '',
    });
  }

  markDone = (index, item) => {
    const { todoList } = this.state;

    this.setState({
      completedList: [...this.state.completedList, item],
      todoList: todoList.filter((character,i) => {
        return i !== index;
      }),
      
    });
  }

  moveToTodo = (index, item) => {
    const {  completedList } = this.state;

    this.setState({
      todoList: [...this.state.todoList, item],
      completedList: completedList.filter((character,i) => {
        return i !== index;
      }),
      
    });
  }
  

  render() {
    const { todoList, completedList } = this.state;
    return (
      <div className=' ui container'>
        <div className=' ui segment'>
          <h1 className='ui center aligned header'>Todo List App</h1>
          <div className="ui divider"></div>
          <div>
            <Form handelSubmit={this.handelSubmit} ></Form>
          </div>
          <div>
            <div className="ui horizontal divider"><h4 className="ui header">Todo Items</h4></div>
            <List buttonText='Done' onClick={this.markDone} list={todoList}></List>
          </div>

          <div>
            <div className="ui horizontal divider"><h4 className="ui header">Completed Items</h4></div>
            <List buttonText='Move to Todo' onClick={this.moveToTodo} list={completedList}></List>
          </div>

        </div>
      </div>
    );
  }
}