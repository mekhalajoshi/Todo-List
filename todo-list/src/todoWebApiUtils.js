/* eslint-disable quotes */
import axios from 'axios'

export function patchItem (item) {
	console.log('-------WebApi PATCH --------')

	const todoId = 1
	const url=`https://jsonplaceholder.typicode.com/posts/${todoId}`
	const requestObject = JSON.stringify({
		title: 'fooooooooooo',
		body: 'bar',
		userId: 1
	})
	// const requestObject = JSON.stringify({
	// 	todoId : item.todoId,
	// 	todoText: item.todoText,
	// 	todoStatus: item.todoStatus,
	// })
	axios.patch(url, requestObject)
		.then(function (response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})
 


	return({
		todoId : item.todoId,
		todoText: item.todoText,
		todoStatus: item.todoStatus,
	}) 

}

export function addItem(item) {
	console.log('-------WebApi ADD--------')

	const url=`https://jsonplaceholder.typicode.com/posts`
	const requestObject = JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1
	})
	// const requestObject = JSON.stringify({
	// 	todoId : item.todoId,
	// 	todoText: item.todoText,
	// 	todoStatus: item.todoStatus,
	// })
	axios.post(url, requestObject)
		.then(function (response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})

	
	return ({
		todoId: item.todoId,
		todoText: item.todoText,
		todoStatus: item.todoStatus,
	})
}

export  function deleteItem (item) {
	console.log('-------WebApi DELETE--------')
	// const todoId = item.todoId
	const todoId = 1
	const url=`https://jsonplaceholder.typicode.com/posts/${todoId}`

	axios.delete(url)
		.then(res => {
			console.log(res)
			console.log(res.data)
		})
		.catch(function (error) {
			console.log(error)
		})
	

}

// TODO: add async await
export  function getList() {
	console.log('-------WebApi GETLIST--------')

	const url=`https://jsonplaceholder.typicode.com/posts`
	
	axios.get(url)
		.then(function (response) {
			// return response.listItems
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})
	
	
	const temp = {
		listItems: [
			{
				todoId: 0,
				todoText: 'milk',
				todoStatus: 'unchecked'
			},
			{
				todoId: 1,
				todoText: 'bread',
				todoStatus: 'unchecked'
			},
			{
				todoId: 2,
				todoText: 'tomato',
				todoStatus: 'unchecked'
			},
			{
				todoId: 3,
				todoText: 'eggs',
				todoStatus: 'unchecked'
			},
		]
	}
	return (temp.listItems)
}
