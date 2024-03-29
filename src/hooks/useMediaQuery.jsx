import * as React from 'react';
export default function useMediaQuery(query) {
	const [matches, setMatches] = React.useState(false);
	React.useEffect(() => {
		const matchQueryList = window.matchMedia(query);
		function handleChange(e) {
			setMatches(e.matches);
		}
		matchQueryList.addEventListener('change', handleChange);
	}, [query]);
	return matches;
}
