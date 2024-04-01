//Get user info from session storage
export const getUserData = (value) => {
	return sessionStorage.getItem(value);
};
