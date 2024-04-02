import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
import SignIn, { action as loginAction } from './components/SignIn';
import SignUp, { action as signUpAction } from './components/SignUp';
import Feed from './components/Feed';
import Profile, {
	loader as profileLoader,
	action as deleteProfileAction,
} from './components/Profile';
import NewPost, { action as newAction } from './components/NewPost';
import EditProfile from './components/EditProfile';
import EditPost from './components/EditPost';
import Post, {
	loader as postLoader,
	action as deletePostAction,
} from './components/Post';
import PrivateRoutes from './components/ProtectedRoute';

import './index.css';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,

		children: [
			{
				errorElement: <ErrorPage />,

				children: [
					{
						// Pages that are children of this route are not available
						// unless user is logged in
						element: <PrivateRoutes />,
						children: [
							{ index: true, element: <Feed /> },

							{
								path: 'feed',
								element: <Feed />,
							},
							{
								path: 'newPost',
								element: <NewPost />,
								action: newAction,
							},
							{
								path: 'post/:postId',
								element: <Post />,
								loader: postLoader,
								children: [
									{
										path: 'delete',
										action: deletePostAction,
									},
								],
							},
							{
								path: 'post/:postId/edit',
								element: <EditPost />,
								loader: postLoader,
							},
							{
								path: 'profile/:userId',
								element: <Profile />,
								loader: profileLoader,
								children: [
									{
										path: 'delete',
										action: deleteProfileAction,
									},
								],
							},

							{
								path: 'profile/:userId/edit',
								element: <EditProfile />,
								loader: profileLoader,
							},
						],
					},
				],
			},
		],
	},
	{
		path: 'login',
		element: <SignIn />,
		action: loginAction,
	},
	{
		path: 'signup',
		element: <SignUp />,
		action: signUpAction,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
