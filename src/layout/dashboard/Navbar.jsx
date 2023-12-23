import {NavLink, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";



export default function Navbar() {
	// Get authentication states and functions
	const { user, logoutUser } = useAuth()
	const navigate = useNavigate();
	
	const handleLogout = () => {
		logoutUser()
			.then(() => {
				navigate("/")
			})
	}
	
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
	
	return <div className="z-[9999]">
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<a className="text-2xl md:text-4xl btn btn-ghost">Lumina Canvas</a>
			</div>
			
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					
					{/* Avatar and profile info */}
					<div tabIndex={0} role="button" className="flex btn btn-ghost">
						
						{/* Avatar */}
						<div className="avatar">
							<div className="w-10 h-10 rounded-full">
								<img alt="Profile picture" src={ user.photoURL } />
							</div>
						</div>
						
						{/* Info */}
						<div className="font-normal text-left">
							{/* Name */}
							<div className="font-bold">{ user.displayName }</div>
							
							{/* Email */}
							<div className="text-xs">{ user.email }</div>
						</div>
					</div>
					
					{/* Dropdown menu */}
					<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
						<li onClick={handleLogout}><a>Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
}
