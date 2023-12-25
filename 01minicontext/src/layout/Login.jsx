import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // set user through usecontext
  const { setUser } = useContext(UserContext);

  const handelSubmit = () => {
    console.log("submit");
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "20rem",
            padding: "8px",
            fontSize: "1rem",
            outline: "none",
          }}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="UserName"
        />
        <input
          style={{
            width: "20rem",
            padding: "8px",
            fontSize: "1rem",
            outline: "none",
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          onClick={handelSubmit}
          style={{
            backgroundColor: "green",
            padding: "10px 2rem",
            marginBottom: "2rem",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
