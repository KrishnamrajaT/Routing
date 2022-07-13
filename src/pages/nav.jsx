import react from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <Link to="/login">
            <li>login</li>
          </Link>
          <Link to="/about">
            <li>about</li>
          </Link>
          <Link to="/Test">
            <li>Test</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
