import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Login from "../layout/landing/auth/login/Login";
import Register from "../layout/landing/auth/register/Register";
import Home from "../layout/landing/home/Home";
import Root from "../layout/Root";
import PrivateRoute from "./PrivateRoute";

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
	{
		path: "/dashboard",
		element: <PrivateRoute><Dashboard/></PrivateRoute>,
	}
])

export default router;
