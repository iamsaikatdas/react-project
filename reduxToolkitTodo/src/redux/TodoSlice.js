import { createSlice, nanoid } from "@reduxjs/toolkit";

// 1. define initial state
const initialState = {
  todos: [{ id: "1", todoMsg: "Hello MSGG" }],
};

// 2. define create slice
export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        // id: state.todos.length + 1,
        id: nanoid(),
        todoMsg: action.payload,
      };
      // jehetu initialState er todos array tai push korchi
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const udpatedTodo = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      state.todos = udpatedTodo;
    },
  },
});

// reducers er modhye sob method
export const { addTodo, deleteTodo, updateTodo } = TodoSlice.actions;

// reducer kei export
export default TodoSlice.reducer;
