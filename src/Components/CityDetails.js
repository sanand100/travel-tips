import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

function CityDetails(props) {
	const [weatherData, setWeatherData] = useState({});
	const getWeatherData = () => {
		let cityInput = 'boston';
		const baseUrl =
			'https://api.weatherapi.com/v1/current.json?key=b39f7c62b71b42a4b4732303221606&q=';
		const url = `${baseUrl}${cityInput}&aqi=no`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => setWeatherData(res))
			.catch(console.error);
	};

	useEffect(() => {
		getWeatherData();
	}, []);

	// console.log(weatherData.location.name);
	return (
		<Container className='text-white bg-dark'>
			City: {weatherData.location ? weatherData.location.name : null}
			<br />
			Local Time: {weatherData.location ? weatherData.location.localtime : null}
			<br />
			Local Temp.(Fahrenheit):
			{weatherData.current ? weatherData.current.temp_f : null}
			<br />
			{/* {weatherData.current ? Object.entries(weatherData.current).map((data) => {return}) : null} */}
			{/* {weatherData.location.name} */}
		</Container>
	);
}

export default CityDetails;
