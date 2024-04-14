import { useState } from 'react';

//  This hook provides a simple interface for reading and writing values
//   to session storage.

//  This hook was originally in use with a previous version of this app.
//  It is not currently being used, but may be useful in the future.

export const useSessionStorage = (keyName, defaultValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = sessionStorage.getItem(keyName);
			if (value) {
				return JSON.parse(value);
			} else {
				sessionStorage.setItem(keyName, defaultValue);
				return defaultValue;
			}
		} catch (err) {
			return defaultValue;
		}
	});
	const setValue = (newValue) => {
		try {
			sessionStorage.setItem(keyName, newValue);
		} catch (err) {
			console.log(err);
		}
		setStoredValue(newValue);
	};
	return [storedValue, setValue];
};
