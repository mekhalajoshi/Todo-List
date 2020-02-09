import React, { Component } from 'react'
import Button from './Button'
import {addItem} from './todoWebApiUtils'
import nanoid from 'nanoid'

export default class Form extends Component {
	constructor(props) {
		super(props)
		this.initialState = {
			item: this.createNewTodoItem()
		}
		this.state = this.initialState
		this.handleChange = this.handleChange.bind(this)
		this.createNewTodoItem = this.createNewTodoItem.bind(this)
	}

	handleChange = (event) => {
		var item = { ...this.state.item }
		item.todoText = event.target.value
		this.setState({ item })
	}

	createNewTodoItem = () => {
		let newItem = {
			todoId:  nanoid(),
			todoText: '',
			todoStatus: 'unchecked',
		}
		return newItem
	}

	handleClick = () => {
		if (this.state.item) {
			let newItem = addItem(this.state.item)
			// TODO: add if (response == 201)
			this.props.handelSubmit(newItem)
			this.setState({
				item: this.createNewTodoItem()
			})
		}
	}

	render() {
		const { item } = this.state
		return (
			<div className="ui left aligned container">
				<div className="ui labeled input">
					<div className="ui label label"> Add Item </div>
					<input
						className="ui focus input"
						type="text"
						placeholder='Add todo Item'
						value={item.todoText}
						onChange={this.handleChange}
						onKeyPress={event => {
							if (event.key === 'Enter') {
								this.handleClick()
							}
						}}
					>
					</input>
				</div>
				<Button
					className="ui blue basic button"
					onClick={this.handleClick}
					text="Add"
				>
				</Button>

			</div>
		)
	}
}
