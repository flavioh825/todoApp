export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo
  }
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    todo
  }
}