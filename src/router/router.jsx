import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: []
	},
	{ path: "/login", element: <div>This is login</div> },
	{ path: "/register", element: <div>This is register</div> },
])

export default router;
