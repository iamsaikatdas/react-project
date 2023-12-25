import React, { useId, useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const User = () => {
  const usersData = useLoaderData();
  const { userId } = useParams();

  const [users, setUsers] = useState(usersData.users);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const filter = users.filter((user) => user.id === Number(userId));
    setUser(filter[0]);
  }, [users]);

  //   const [user, setUser] = useState();
  //   useEffect(() => {
  //     fetch(`https://dummyjson.com/users/${Number(userId)}`)
  //       .then((res) => res.json())
  //       .then((json) => setUser(json));
  //   }, []);
  console.log(user);

  return (
    <div className="text-center font-bold p-4 text-xl bg-green-500 flex justify-center">
      User: {userId}
      {user && (
        <div className="w-1/2 border-2 text-center">
          Name: {user?.firstName} {user?.lastName}
          <div className="flex gap-3 align-middle justify-center items-center">
            <img src={user.image} alt="photo" />
            <div>
              <p>Card Number: {user?.bank?.cardNumber}</p>
              <p>Card type: {user?.bank?.cardType}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// this is data loader
const usersLoaderData = async () => {
  const response = await fetch(`https://dummyjson.com/users`);
  return response.json();
};

export { User, usersLoaderData };
