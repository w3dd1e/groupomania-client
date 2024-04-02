import { Outlet, Navigate } from 'react-router-dom';

// Checks for JWT token in session storage to determine if user is authenticated
const PrivateRoutes = () => {
	const token = sessionStorage.getItem('token');
	return token ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
