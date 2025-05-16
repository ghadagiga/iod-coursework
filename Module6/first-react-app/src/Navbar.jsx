import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar" style={{ backgroundColor: "black", color: "blue" }}>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>{" "}
      {/* ++ Add another page with route and component */}
    </nav>
  );
}
