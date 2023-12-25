import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full m-auto">
        <h1 className="text-4xl p-4 font-bold">React Redux</h1>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
