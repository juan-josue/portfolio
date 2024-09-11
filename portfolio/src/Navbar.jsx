import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = "font-text text-md p-2 text-zinc-200";
  const activeLinkStyle = "bg-indigo-500 rounded";

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-16 py-8">
      <Link className={linkStyle} to="/">Juan Gutierrez Moreno</Link>
      <div className="flex gap-8 items-center">
        <Link
          to="/"
          className={`${linkStyle}  ${
            location.pathname === "/" ? activeLinkStyle : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`${linkStyle} ${
            location.pathname === "/experience" ? activeLinkStyle : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          className={`${linkStyle} ${
            location.pathname === "/experience" ? activeLinkStyle : ""
          }`}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          className={`${linkStyle} ${
            location.pathname === "/contact" ? activeLinkStyle : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
