///// Search.js
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SearchForm from './SearchForm';
import Container from 'react-bootstrap/Container';

// import './HomeAndSearch.css';

function Search({ searchOptions, currentWeather, setCurrentWeather }) {
	let navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const requestedSearch = searchParams.get('searchString');
	const [searchString, setSearchString] = useState(requestedSearch || '');
	const [lastSearch, setLastSearch] = useState('');
	// const [currentWeather, setCurrentWeather] = useState({});
	const [search, setSearch] = useState(false);

	const handleChange = (event) => {
		setSearchString(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getData(searchString);
		navigate('/weather');
	};

	const getData = (searchString) => {
		if (searchString) {
			// let cityInput = 'berlin';
			// const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=';
			const url = `${searchOptions.url}${
				searchOptions.key
			}&q=${searchString.toLowerCase()}&aqi=no`;
			fetch(url)
				.then((res) => res.json())
				.then((res) => setCurrentWeather(res))
				// .then((res) => console.log(res))
				.catch(console.error);
		}
	};
	useEffect(() => {
		if (requestedSearch) {
			getData(requestedSearch);
		} else {
			setSearchParams({});
		}
		// eslint-disable-next-line
	}, [requestedSearch]);

	return (
		<Container>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>

			{/* {search && (requestedSearch || lastSearch) && !!currentWeather.length && (
				<>
					<p>
						Showing results for{' '}
						<span style={{ fontStyle: 'italic' }}>{lastSearch}:</span>{' '}
					</p> */}
			{/* <CityDetails
				weatherDataLocation={currentWeather.location}
				weatherDataCurrent={currentWeather.current}
			/> */}
			{/* </>
			)}
			{search && !currentWeather.length && (
				<p>
					No results found for{' '}
					<span style={{ fontStyle: 'italic' }}>{lastSearch}</span>. Please try
					another search
				</p>
			)} */}
		</Container>
	);
}

export default Search;
