import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/app';
import ErrorPage from './pages/ErrorPage';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,

		children: [
			{
				errorElement: <ErrorPage />,
			},

			/* children: [
					{ index: true, element: <LoginPage /> },
					{
						path: 'login',
						element: <LoginPage />,
					},
					{
						path: 'signup',
						element: <SignUpPage />,
					},
					{
						path: 'feed',
						element: <Feed />,
						loader: feedLoader,
					},
					{
						path: 'profile/:userId',
						element: <ProfilePage />,
						loader: profileLoader,
					}, */
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
