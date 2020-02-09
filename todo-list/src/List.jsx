import React, { Component } from 'react'
// import Button from './Button'
import { List, Button } from 'semantic-ui-react'

export default class Lists extends Component {
	render() {
		const { onClick,list, deleteTodoItem, filter } = this.props
		if ( list ) {
			let filteredList = list.filter((el) => el.todoStatus === filter)
			let buttonText = filter==='checked'?'Move to Todo':'Done'
			return (
				<div >
					<List >{filteredList.map((item) =>
						<List.Item key={item.todoId}>
							<div className="ui right labeled button">
								<h3 className ="ui basic label">{item.todoText}</h3>
								<Button onClick = {()=>onClick(item)} className="ui green basic button" >{buttonText}</Button>
								<Button onClick = {()=>deleteTodoItem(item)} className="ui red basic button" >Remove</Button>
							</div>
						</List.Item>
					)}
					</List>
				</div>
			)
		}
	}
}
