import * as React from 'react';

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
