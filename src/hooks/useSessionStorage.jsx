import { useState } from 'react';

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
