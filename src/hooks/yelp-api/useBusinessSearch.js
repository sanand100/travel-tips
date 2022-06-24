import { useState, useEffect } from 'react';
import * as api from './yelp-api';

export function useBusinessSearch(term, location) {
	const [businesses, setBusinesses] = useState();
	const [amountResults, setAmountResults] = useState();
	const [searchParams, setSearchParams] = useState({ location });

	useEffect(() => {
		setBusinesses([]);
		const fetchData = async () => {
			try {
				const rawData = await api.get('/businesses/search', searchParams);
				const resp = await rawData.json();
				setBusinesses(resp.businesses);
				setAmountResults(resp.total);
			} catch (e) {
				console.error(e);
			}
		};
		fetchData();
	}, [searchParams]);

	return [businesses, amountResults, searchParams, setSearchParams];
}
