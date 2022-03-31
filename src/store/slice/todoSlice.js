import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },

        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1)
        }

    }
})

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer 

