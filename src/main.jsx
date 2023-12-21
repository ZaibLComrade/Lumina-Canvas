import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import './index.css'
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
	<AuthProvider> { /* Provides authentication functions and states */ }
		<RouterProvider router={ router }/>
	</AuthProvider>
</React.StrictMode>,
)
