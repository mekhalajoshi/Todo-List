import React, { Component } from 'react'
import Form from './components/Form'
import Lists from './components/List'
import TodoStore from './TodoStore'
import TodoActionCreators from './TodoActionCreators'

// Private function that gets values from store
function getStateFromStore() {
	return {
		todoList: TodoStore.getTodoList()
	}
}

export default class Todo extends Component {

	constructor(props) {
		super(props)
		this.state = getStateFromStore()

		this.onChange = this.onChange.bind(this)
		this.handelSubmit = this.handelSubmit.bind(this)
		this.toggleTodoStatus = this.toggleTodoStatus.bind(this)
		this.deleteTodoItem = this.deleteTodoItem.bind(this)
	}

	// Store uses this as callback fn when store is updated
	onChange() {
		this.setState(getStateFromStore())
	}

	// Subscribe to store events on mount
	componentDidMount() {
		TodoStore.addChangeListener(this.onChange)
		TodoActionCreators.getTodoList()
	}

	// Un-Subscribe to store events on un-mount
	componentWillUnmount() {
		TodoStore.removeChangeListener(this.onChange)
	}

	handelSubmit = (item) => {
		TodoActionCreators.createTodoItem(item)
	}

	toggleTodoStatus = (item) => {
		item.todoStatus = (item.todoStatus === 'checked') ? 'unchecked' : 'checked'
		TodoActionCreators.updateTodoItem(item)
	}

	deleteTodoItem = (item) => {
		TodoActionCreators.deleteTodoItem(item)
	}

	render() {
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
						<Lists
							deleteTodoItem = {this.deleteTodoItem}
							onClick={this.toggleTodoStatus}
							list={this.state.todoList}
							filter = "unchecked"
						>
						</Lists>
					</div>
					
					<div>
						<div className="ui horizontal divider"><h4 className="ui header">Completed Items</h4></div>
						<Lists
							deleteTodoItem = {this.deleteTodoItem}
							onClick={this.toggleTodoStatus}
							list={this.state.todoList}
							filter="checked"
						>
						</Lists>
					</div>
				</div>
			</div>
		)
	}
}