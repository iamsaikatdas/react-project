import { createContext, useContext } from "react";

// 1.
// define context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "This is msg",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updateToto: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// 2.
// Provider
export const TodoProvider = TodoContext.Provider;

// 3.
// cusome hook, for useContext & TodoContext
export const UseTodo = () => {
  return useContext(TodoContext);
};
