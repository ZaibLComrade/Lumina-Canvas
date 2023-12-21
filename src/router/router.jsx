import { createBrowserRouter } from "react-router-dom";
import Login from "../layout/landing/auth/login/Login";
import Register from "../layout/landing/auth/register/Register";
import Root from "../layout/Root";

const router = createBrowserRouter([
	// main path
	{
		path: "/",
		element: <Root/>,
		children: [
			{ path: "/login", element: <Login/> },
			{ path: "/register", element: <Register/> },
		]
	},
	
	// Authentication paths
])

export default router;
