import {NavLink} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



export default function Navbar() {
	// Get authentication states and functions
	const { user, logoutUser } = useAuth()
	
	// Items to be displayed on navbar
	const listItems = (
	<>
		<li>
			<NavLink to="/">
				Home
			</NavLink>
		</li>
		<li>
			<NavLink to="/dashboard">
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
				user // Let's user log out if logged in
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
		<a className="text-2xl md:text-4xl text-black-1 btn btn-ghost">Lumina Canvas</a>
	</div>
	
	{/* List Items */}
	<div className="flex-none">
		{ /* hidden in small devices */ }
		<ul className="hidden px-1 md:flex space-x-2 menu menu-horizontal">
			{ listItems }
		</ul>
		
		{/* Visible in small devices */}
	</div>
	
</div>
	</div>
}
