import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    
    <div className="nav">
      <h3>This is Header</h3>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/user2">Users2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
