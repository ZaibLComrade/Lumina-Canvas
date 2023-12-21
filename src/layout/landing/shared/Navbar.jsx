import {NavLink} from "react-router-dom";

const listItems = (
  <>
    <li>
      <NavLink to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/register">
       Register
      </NavLink>
    </li>
    <li>
      <NavLink to="/aboutus">
        About Us
      </NavLink>
    </li>
    <li>
      <NavLink to="/blog">
        Dashboard
      </NavLink>
    </li>

  </>
);

export default function Navbar() {
	return <div>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="text-xl btn btn-ghost">Lumina Canvas</a>
  </div>
  <div className="flex-none">
    <ul className="px-1 space-x-2 menu menu-horizontal">
		{ listItems }
    </ul>
  </div>
</div>
	</div>
}
