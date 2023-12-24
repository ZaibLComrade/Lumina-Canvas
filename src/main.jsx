import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import './index.css'
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const queryClient = new QueryClient();
export const ItemTypes = {
	CARD: 'card',
}

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
	<QueryClientProvider client={ queryClient }>
		<AuthProvider> { /* Provides authentication functions and states */ }
			<DndProvider backend={HTML5Backend}>
				<RouterProvider router={ router }/>
			</DndProvider>
		</AuthProvider>
	</QueryClientProvider>
</React.StrictMode>,
)
