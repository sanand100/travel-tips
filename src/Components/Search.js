///// Search.js
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SearchForm from './SearchForm';
import Container from 'react-bootstrap/Container';
// import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

// import './HomeAndSearch.css';

function Search({
	searchOptions,
	currentWeather,
	setCurrentWeather,
	setCurrentYelpHotelData,
	setCurrentYelpFoodData,
	setBackgroundImage,
	// setCovidInfo,
	setNewsData,
}) {
	let navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const requestedSearch = searchParams.get('searchString');
	const [searchString, setSearchString] = useState(requestedSearch || '');
	const [lastSearch, setLastSearch] = useState('');
	const [search, setSearch] = useState(false);
	// const [businesses, amountResults, searchParams, setSearchParams] =
	// useBusinessSearch('hotel', searchString);

	const handleChange = (event) => {
		setSearchString(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getData(searchString);
		navigate('/cityDetails');
	};

	const getData = (searchString) => {
		if (searchString) {
			Promise.all([
				fetch(
					`${searchOptions.url}${
						searchOptions.key
					}&q=${searchString.toLowerCase()}&aqi=no`
				),
				fetch(
					`https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotel&location=${searchString.toLowerCase()}`,
					{
						headers: {
							Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
						},
					}
				),
				fetch(
					`https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${searchString.toLowerCase()}`,
					{
						headers: {
							Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
						},
					}
				),
				fetch(
					`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASHAPI_KEY}&query=${searchString}&orientation=landscape`
				),
				fetch(
					`https://newsdata.io/api/1/news?apikey=pub_8642f538a869bdfc6de9d36a086cbc8a4286&q=${searchString} `
				),
			])
				.then(function (responses) {
					return Promise.all(
						responses.map(function (response) {
							return response.json();
						})
					);
				})
				.then(function (data) {
					// Log the data to the console
					// You would do something with both sets of data here
					console.log(data);
					setCurrentWeather(data[0]);
					setCurrentYelpHotelData(data[1]);
					setCurrentYelpFoodData(data[2]);
					setBackgroundImage(data[3].urls.regular);
					setNewsData(data[4]);
				})
				.catch(function (error) {
					// if there's an error, log it
					console.log(error);
				});
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
		</Container>
	);
}

export default Search;
