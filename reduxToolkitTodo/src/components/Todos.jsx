import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../redux/Store";
import { deleteTodo, updateTodo } from "../redux/TodoSlice";

const Todos = () => {
  //   const todos = useSelector((state) => state.todo.todos);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [txt, setTxt] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [todoId, setTodoId] = useState("");

  const updateTodos = () => {
    dispatch(updateTodo({ id: todoId, todoMsg: txt }));
    setTxt("");
    setIsTrue(false);
  };

  return (
    <Provider store={store}>
      {todos ? <div className="m-4 text-3xl">Todos</div> : "Please add todo"}
      <div className="">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-500 p-2 mb-2 rounded-xl flex justify-between align-middle text-center px-4"
          >
            {todo.todoMsg}
            <div>
              <button
                type="check"
                className="text-white font-bold text-sm px-4"
                onClick={() => {
                  setIsTrue(!isTrue);
                  setTodoId(todo.id);
                  setTxt(todoId);
                }}
              >
                {!isTrue ? "Edit" : ""}
              </button>
              <button
                className="text-white font-bold text-2xl px-4"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                X
              </button>
            </div>
          </li>
        ))}
        <div>
          {isTrue ? (
            <>
              <input
                type="text"
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
                className="px-3 py-2 outline-none border-2 w-1/2 mr-4"
              />
              <button
                onClick={updateTodos}
                className="bg-green-400 p-2 px-4 rounded-md"
              >
                Save
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Provider>
  );
};

export default Todos;
