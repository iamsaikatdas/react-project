import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

export const AddTodo = () => {
  const [todoTxt, setTodoTxt] = useState("");

  // dispatch reducer ke use kore store er value change kore
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    // dispatch er modhye reducer ke call kore tar modhye value pass
    dispatch(addTodo(todoTxt));

    setTodoTxt("");
  };
  return (
    <div>
      <form className="flex" onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todoTxt}
          onChange={(e) => setTodoTxt(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-6 py-2 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
};
