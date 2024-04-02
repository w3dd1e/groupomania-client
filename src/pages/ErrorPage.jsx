import { useRouteError } from 'react-router-dom';

// If an error is thrown on the client side, it will render here.
// This page should render in the Outlet component if user is logged in.
export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
