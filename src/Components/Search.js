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
		navigate('/weather');
	};

	// const getData = (searchString) => {
	// 	if (searchString) {
	// 		// let cityInput = 'berlin';
	// 		// const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=';
	// const url = `${searchOptions.url}${
	// 	searchOptions.key
	// }&q=${searchString.toLowerCase()}&aqi=no`;
	// 		fetch(url)
	// 			.then((res) => res.json())
	// 			.then((res) => setCurrentWeather(res))
	// 			// .then((res) => console.log(res))
	// 			.catch(console.error);
	// 	}
	// };

	// const getYelpData = (searchString) => {
	// 	if (searchString) {
	// let url = `https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotel&location=${searchString.toLowerCase()}`;
	// 		fetch(url, {
	// 			method: 'GET',
	// headers: {
	// 	Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
	// },
	// 		})
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				console.log('Success!', data.businesses);
	// 				// setCurrentYelpData(data.businesses);
	// 			})
	// 			.catch((err) => {
	// 				console.log('oh no, something is not right');
	// 			});
	// 		console.log('hello is this working');
	// 	}
	// };

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

	// const searchRequest = {
	// 	// term: 'food',
	// 	location: searchString,
	// };
	// const getYelpData = (searchString) => {
	// 	if (searchString) {
	// 		const client = yelp.client(
	// 			'AYTwXFiGVKTQ7n0KPYYAs74tm4TA3X5_inWl9CvlDRM6l56logB07kmUiIYEE21hzrPIebl8Ri-jk82xGShhvbC9lqLGNw2ljvmdbkV1JEJo6HtwEk0bdJfsk2OrYnYx'
	// 		);

	// 		client
	// 			.search({
	// 				location: searchString,
	// 			})
	// 			.then((response) => {
	// 				const firstResult = response.jsonBody.businesses[0];
	// 				const prettyJson = JSON.stringify(firstResult, null, 4);
	// 				console.log(prettyJson);
	// 				setCurrentYelpData(prettyJSON);
	// 			})
	// 			.catch((e) => {
	// 				console.log(e);
	// 			});
	// 	}
	// };

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
