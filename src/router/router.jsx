import { createBrowserRouter } from "react-router-dom";
import Login from "../layout/landing/auth/login/Login";
import Register from "../layout/landing/auth/register/Register";
import Home from "../layout/landing/home/Home";
import Root from "../layout/Root";

const router = createBrowserRouter([
	// main path
	{
		path: "/",
		element: <Root/>,
		children: [
			{ path: "/", element: <Home/> },
			{ path: "/login", element: <Login/> },
			{ path: "/register", element: <Register/> },
		]
	},
	
	// Authentication paths
])

export default router;
