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
	
	return <div className="z-[9999]">
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className="text-2xl md:text-4xl btn btn-ghost">Lumina Canvas</a>
  </div>
 
  {/* Visible in small devices */}
  <div className="navbar-end">
    <div>
		<ul className="hidden px-1 space-x-2 menu menu-horizontal md:flex">
         { listItems }
       </ul>
      <div className="dropdown dropdown-end z-[9999] md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          { listItems }
        </ul>
      </div>
    </div>
  </div>
</div>
	</div>
}
