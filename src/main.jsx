import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Feed from './components/Feed';
import Profile, { loader as profileLoader } from './components/Profile';
import NewPost from './components/NewPost';
import EditProfile from './components/EditProfile';
import Delete from './components/Delete';
import PostView, { loader as postLoader } from './components/PostView';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,

		children: [
			{
				errorElement: <ErrorPage />,

				children: [
					{ index: true, element: <SignIn /> },
					{
						path: 'login',
						element: <SignIn />,
					},
					{
						path: 'signup',
						element: <SignUp />,
					},
					{
						path: 'feed',
						element: <Feed />,
						/*loader: feedLoader,*/
					},
					{
						path: 'newPost',
						element: <NewPost />,
					},
					{
						path: 'post/:postId',
						element: <PostView />,
						loader: postLoader,
					},
					{
						path: 'profile/:userId',
						element: <Profile />,
						loader: profileLoader,
					},

					{ path: 'editProfile', element: <EditProfile /> },
					{ path: 'deleteAccount', element: <Delete /> },
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
