import { useState } from "react";
import "./App.css";
import { UserContextProvider } from "./context/UserContextProvider";
import Login from "./layout/Login";
import Profile from "./layout/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>01-Mini Project of Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
