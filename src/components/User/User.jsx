import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);
  const location = useLocation();
  console.log(location);


  const { id, name, email, phone } = user;
  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json());

  const userStyle = {
    border: "2px solid gray",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
  };

  if (visitHome) {
    return <Navigate to="/">Go to Home</Navigate>;
  }

  return (
    <div style={userStyle}>
      <h3>Name: {name}</h3>
      <p>
        <small>Phone: {phone}</small>
      </p>

      <p>
        <small>Email: {email}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>

      <button onClick={() => setShowInfo(!showInfo)}>
        {" "}
        {showInfo ? "Hide" : "show"} Info
      </button>

      {
        showInfo && <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 userPromise={userPromise} />
        </Suspense>
        }
      <button onClick={() => setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
