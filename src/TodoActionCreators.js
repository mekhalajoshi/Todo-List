import AppDispatcher from './utils/AppDispatcher'
import ActionTypes from './utils/ActionTypes'

export default {
	getTodoList() {
		AppDispatcher.dispatch({
			type: ActionTypes.GET_TODO_LIST,
		})
	},

	successTodoList(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.TODO_LIST_SUCCESS,
			data, // SUCCESS
		})
	},

	failureTodoList(error) {
		AppDispatcher.dispatch({
			type: ActionTypes.TODO_LIST_FAILURE,
			error, // FAILURE
		})
	},

	createTodoItem(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.CREATE_TODO_ITEM,
			data
		})
	},
	successCreateTodoItem(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.CREATE_TODO_ITEM_SUCCESS,
			data, // SUCCESS
		})
	},

	failureCreateTodoItem(error) {
		AppDispatcher.dispatch({
			type: ActionTypes.CREATE_TODO_ITEM_FAILURE,
			error, // FAILURE
		})
	},
	updateTodoItem(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.UPDATE_TODO_ITEM,
			data
		})
	},
	successUpdateTodoItem(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.UPDATE_TODO_ITEM_SUCCESS,
			data, // SUCCESS
		})
	},

	failureUpdateTodoItem(error) {
		AppDispatcher.dispatch({
			type: ActionTypes.UPDATE_TODO_ITEM_FAILURE,
			error, // FAILURE
		})
	},
	deleteTodoItem(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.DELETE_TODO_ITEM,
			data
		})
	},
	successDeleteTodoItem(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.DELETE_TODO_ITEM_SUCCESS,
			data, // SUCCESS
		})
	},

	failureDeleteTodoItem(error){
		AppDispatcher.dispatch({
			type: ActionTypes.DELETE_TODO_ITEM_FAILURE,
			error, // FAILURE
		})
	}
}
