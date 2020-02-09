import React, { Component } from 'react'

export default class Button extends Component {
	render() {
		const { className, text, onClick } = this.props
		return (
			<button
				className={className}
				onClick={onClick}
			>
				{text}
			</button>
		)
	}


}