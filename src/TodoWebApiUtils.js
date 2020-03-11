/* eslint-disable quotes */
import axios from 'axios'
import TodoActionCreators from './TodoActionCreators'

const baseUrl = 'https://d0y3f0lucc.execute-api.us-east-2.amazonaws.com/prod'

export function getList() {
	console.log('-------WebApi GETLIST--------')
	const url=`${baseUrl}/todo`

	axios.get(url)
		.then(response => {
			TodoActionCreators.successTodoList(response.data.listItems)
		})
		.catch(error => {
			console.log(error)
			TodoActionCreators.failureTodoList(error)
		})
}

export function addItem(item) {
	console.log('-------WebApi ADD--------')
	const url=`${baseUrl}/todo`
	
	axios.post(url, JSON.stringify(item))
		.then(response => {
			TodoActionCreators.successCreateTodoItem(item)
		})
		.catch(error => {
			console.log(error)
			TodoActionCreators.failureCreateTodoItem(error)
		})
}

export function patchItem (item) {
	console.log('-------WebApi PATCH --------')
	const url=`${baseUrl}/todo/${item.todoId}`

	axios.patch(url, JSON.stringify(item))
		.then(response => {
			TodoActionCreators.successUpdateTodoItem(item)
		})
		.catch(error => {
			console.log(error)
			TodoActionCreators.failureUpdateTodoItem(error)
		})
}

export function deleteItem (item) {
	console.log('-------WebApi DELETE--------')
	const url=`${baseUrl}/todo/${item.todoId}`

	axios.delete(url)
		.then(response => {
			TodoActionCreators.successDeleteTodoItem(item)
		})
		.catch(error => {
			console.log(error)
			TodoActionCreators.failureDeleteTodoItem(error)
		})
}
