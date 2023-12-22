import {Outlet} from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./landing/shared/Navbar";
import useAuth from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Root() {
	const { loading } = useAuth();
	
	// Render loading
	if(loading) return <LoadingScreen/>
	
	// Render site if not loading
	return <div className="font-inter">
		<Navbar/>
		<div className="md:min-h-[calc(100vh-68px)] min-h-[calc(100vh-64px)]">
			<Outlet/>
		</div>
		<ToastContainer/>
	</div>
}
