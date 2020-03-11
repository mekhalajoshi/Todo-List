
import { EventEmitter } from 'events'
import assign from 'object-assign'

import { getList, addItem, patchItem, deleteItem } from './TodoWebApiUtils'
import AppDispatcher from './utils/AppDispatcher'
import ActionTypes from './utils/ActionTypes'

const CHANGE_EVENT = 'change'

// Store instances/variables
let todoList = []

const TodoStore = assign({}, EventEmitter.prototype, {
	// Public functions the views can see

	emitChange() {
		this.emit(CHANGE_EVENT)
	},

	// View can subscribe to store events
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback)
	},

	// View can un-subscribe to store events
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},

	// View can retrieve specific values that store manages
	getTodoList() {
		return todoList
	},

})

TodoStore.dispatchToken = AppDispatcher.register((action) => {
	switch (action.type) {
	case ActionTypes.GET_TODO_LIST:
		getList() // make api call to retrieve todo list
		TodoStore.emitChange()
		break
	case ActionTypes.TODO_LIST_SUCCESS:
		todoList = action.data // update store instance
		TodoStore.emitChange()
		break
	case ActionTypes.TODO_LIST_FAILURE:
		// TODO: handle failure
		todoList = action.error // update store instance
		TodoStore.emitChange()
		break
	case ActionTypes.CREATE_TODO_ITEM:
		addItem(action.data) // make api call to retrieve todo list
		TodoStore.emitChange()
		break
	case ActionTypes.CREATE_TODO_ITEM_SUCCESS:
		todoList.push(action.data)  // update store instance
		TodoStore.emitChange()
		break
	case ActionTypes.CREATE_TODO_ITEM_FAILURE:
		// TODO: handle failure
		todoList = action.error // update store instance
		TodoStore.emitChange()
		break
	case ActionTypes.UPDATE_TODO_ITEM:
		patchItem(action.data) // make api call to update item to todo list
		TodoStore.emitChange()
		break
	case ActionTypes.UPDATE_TODO_ITEM_SUCCESS:
		// find the index of the original item
		var index = todoList.findIndex(el => el.todoId === action.data.todoId)
		// Replace the original item with the new item
		todoList.splice(index, 1, action.data)
		TodoStore.emitChange()
		break
	case ActionTypes.UPDATE_TODO_ITEM_FAILURE:
		// TODO: handle failure
		todoList = action.error // update store instance
		TodoStore.emitChange()
		break
	case ActionTypes.DELETE_TODO_ITEM:
		deleteItem(action.data) // make api call to update item to todo list
		TodoStore.emitChange()
		break
	case ActionTypes.DELETE_TODO_ITEM_SUCCESS:
		// find the index of the original item
		index = todoList.findIndex(el => el.todoId === action.data.todoId)
		// Replace the original item with the new item
		todoList.splice(index, 1)
		TodoStore.emitChange()
		break
	case ActionTypes.DELETE_TODO_ITEM_FAILURE:
		// TODO: handle failure
		todoList = action.error // update store instance
		TodoStore.emitChange()
		break
	default:
    // do nothing
	}
})

export default TodoStore
