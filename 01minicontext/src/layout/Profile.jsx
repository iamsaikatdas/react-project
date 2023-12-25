import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "15px",
        width: "20rem",
        margin: "auto",
        color: "white",
        fontStyle: "italic",
        fontSize: "20px",
      }}
    >
      <p>Welcome: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default Profile;
