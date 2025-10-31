import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/user";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>This is Users page</h2>
      <div>
        {users.map(u => (
          <User key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
};

export default Users;
