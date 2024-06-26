import * as React from 'react';

// This custom hook uses the `window.matchMedia()` API to detect
// window size and orientation changes and update the `matches` state accordingly.
export default function useMediaQuery(query) {
	const [matches, setMatches] = React.useState(() => {
		// Check initial match on component mount
		return window.matchMedia(query).matches;
	});

	React.useEffect(() => {
		const matchQueryList = window.matchMedia(query);

		function handleChange(e) {
			setMatches(e.matches);
		}

		matchQueryList.addEventListener('change', handleChange);

		// Clean up event listener on component unmount
		return () => {
			matchQueryList.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
}
