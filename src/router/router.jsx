import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div className="text-red-500">This is main</div>,
		children: []
	},
	{ path: "/login", element: <div>This is login</div> },
	{ path: "/register", element: <div>This is register</div> },
])

export default router;
