import { createContext, useContext, useMemo } from 'react';
import { useSessionStorage } from './useSessionStorage';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userId, setUserId] = useSessionStorage('userId', null);

	// call this function when you want to authenticate the user
	const login = async (data) => {
		setUserId(data);
	};

	// call this function to sign out logged in user
	const logout = () => {
		setUserId(null);
	};

	const value = useMemo(
		() => ({
			userId,
			login,
			logout,
		}),
		[userId]
	);
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
