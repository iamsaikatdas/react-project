import { useState } from "react";
import { UseTodo } from "../context";

function TodoItem({ todo }) {
  const { deleteTodo, updateToto, toggleComplete } = UseTodo();

  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(todo.isCompleted);

  const editTodo = () => {
    updateToto(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex  rounded-lg px-3 py-2 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#bb7777]" : "bg-[#2e413a]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isisCompleted}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={` p-1 border-2 outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-20 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-300 hover:bg-gray-100 duration-75 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
