import React, { Component } from 'react'
import Form from './Form'
import {patchItem} from './todoWebApiUtils'
import {deleteItem} from './todoWebApiUtils'
import {getList} from './todoWebApiUtils'
import Lists from './List'

export default class Todo extends Component {

	constructor(props) {
		super(props)
		this.initialState = {
			// todoList: []
			todoList: getList(),
		}

		this.state = this.initialState
		this.handelSubmit = this.handelSubmit.bind(this)
		this.toggleTodoStatus = this.toggleTodoStatus.bind(this)
		this.deleteTodoItem = this.deleteTodoItem.bind(this)
	}

	handelSubmit = (item) => {
		this.setState({
			todoList: [...this.state.todoList, item],
		})
	}

	toggleTodoStatus = (item) => {
		const { todoList } = this.state
		// Change the todoStatus of the item
		item.todoStatus = (item.todoStatus === 'checked') ? 'unchecked' : 'checked'
		// call Api to patch item and receive an updated item
		// TODO: add if(response == 201)
		var newItem = patchItem(item)
		// find the index of the original item
		var index = todoList.findIndex(el => el.todoId === newItem.todoId)
		// Replace the original item with the new item
		todoList.splice(index, 1, newItem)

		this.setState({
			todoList: todoList
		})
	}

	deleteTodoItem = (item) => {
		const { todoList } = this.state
		// call Api to delete item 
		deleteItem(item)
		// find the index of the original item
		// TODO: add if(resopnse == 200)
		var index = todoList.findIndex(el => el.todoId === item.todoId)
		// Delete the original item 
		todoList.splice(index, 1)

		this.setState({
			todoList: todoList
		})
	}

	render() {
		const { todoList } = this.state
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
							list={todoList}
							filter = "unchecked"
						>
						</Lists>
					</div>
					
					<div>
						<div className="ui horizontal divider"><h4 className="ui header">Completed Items</h4></div>
						<Lists
							deleteTodoItem = {this.deleteTodoItem}
							onClick={this.toggleTodoStatus}
							list={todoList}
							filter="checked"
						>
						</Lists>
					</div>
				</div>
			</div>
		)
	}
}