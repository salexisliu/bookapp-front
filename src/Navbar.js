import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-blue-100">
      <nav className="w-4/5 mx-auto">
        <NavLink className="" to="/">Home</NavLink>
        <NavLink className="" to="/bookshelf">Bookshelf</NavLink>
        <NavLink className="" to="/browsebooks">Browse All Books</NavLink>
        <NavLink className="" to="/login">Login</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
