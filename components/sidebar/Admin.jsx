import React from "react";
import { NavLink } from "react-router";

const Admin = () => {
  return (
    <div>
      <li>
        <NavLink to="/dashboard/users">Users</NavLink>
        <NavLink to="/dashboard/librarians,">Librarians</NavLink>
        <NavLink to="/dashboard/revenue reports">Revenue reports</NavLink>
      </li>
    </div>
  );
};

export default Admin;
