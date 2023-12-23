import {useNavigate} from "react-router-dom";
import AddButton from "../../components/AddButton";
import useAuth from "../../hooks/useAuth";
import useModalProps from "../../hooks/useModalProps";



export default function Navbar() {
	// Get authentication states and functions
	const { user, logoutUser } = useAuth()
	const navigate = useNavigate();
	const { setToggleModal } = useModalProps();
	
	const handleLogout = () => {
		logoutUser()
			.then(() => {
				navigate("/")
			})
	}
	
	return <div className="z-[9999]">
		<div className="bg-white text-neutral navbar">
			<div className="navbar-start">
				<a className="text-2xl md:text-4xl btn btn-ghost">Lumina Canvas</a>
			</div>
			
			<div className="hidden navbar-center md:block">
				<AddButton setToggleModal={ setToggleModal }/>
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
						
						{/* Info for larger devices*/}
						<div className="hidden font-normal text-left md:block">
							{/* Name */}
							<div className="font-bold">{ user.displayName }</div>
							
							{/* Email */}
							<div className="text-xs">{ user.email }</div>
						</div>
					</div>
					
					{/* Dropdown menu */}
					<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
						<li className="border-b md:hidden border-gray-2">
							<a className="flex flex-col items-start mb-1">
								<div className="font-bold">{ user.displayName }</div>
								<div className="text-xs">{ user.email }</div>
							</a>
						</li>
						<li onClick={handleLogout}><a>Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
}
