//  Get user info from session storage
// This was used in place of useSessionStorage in React Router Actions
// as hooks should not be used in those functions
export const getUserData = (value) => {
	return sessionStorage.getItem(value);
};
