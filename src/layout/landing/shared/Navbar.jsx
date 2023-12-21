import {NavLink} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



export default function Navbar() {
	const { user, logoutUser } = useAuth()
	console.log(user);
	
	// Items to be displayed on navbar
	const listItems = (
	<>
		<li>
			<NavLink to="/">
				Home
			</NavLink>
		</li>
		<li>
			<NavLink to="/blog">
				Dashboard
			</NavLink>
		</li>
		<li>
			<NavLink to="/login">
				Login
			</NavLink>
		</li>
		<li>
			{
				user
				? <button onClick={ logoutUser }>
					Logout
				</button>
				: <NavLink to="/register">
					Register
				</NavLink>
			}
		</li>
	</>
	);
	
	return <div>
<div className="navbar bg-base-100">
	
	{/* Title */}
  <div className="flex-1">
    <a className="text-4xl btn btn-ghost">Lumina Canvas</a>
  </div>
	
	{/* List Items */}
  <div className="flex-none">
    <ul className="px-1 space-x-2 menu menu-horizontal">
		{ listItems }
    </ul>
  </div>
	
</div>
	</div>
}
