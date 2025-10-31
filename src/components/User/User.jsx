import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const userStyle = {
    border: "2px solid gray",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px"
  };

  return (
    <div style={userStyle}>
      <h3>Name: {name}</h3>
      <p><small>Phone: {phone}</small></p>
     
      <p><small>Email: {email}</small></p>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
