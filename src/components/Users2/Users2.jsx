import React, { useEffect, useState } from "react";

const Users2 = ({ usersPromise }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersPromise.then(data => setUsers(data));
  }, [usersPromise]);

  return (
    <div>

    </div>
  );
};

export default Users2;
