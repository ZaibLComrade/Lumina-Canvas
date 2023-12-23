import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import './index.css'
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
	<QueryClientProvider client={ queryClient }>
		<AuthProvider> { /* Provides authentication functions and states */ }
			<RouterProvider router={ router }/>
		</AuthProvider>
	</QueryClientProvider>
</React.StrictMode>,
)
