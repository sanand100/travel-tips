import React from 'react';
import { useState, useEffect } from 'react';

function CityDetails(props) {
	const [weatherData, setWeatherData] = useState({});
	const getWeatherData = () => {
		let cityInput = 'berlin';
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
		<div>
			{weatherData.location ? weatherData.location.name : null}
			{/* {weatherData.location.name} */}
		</div>
	);
}

export default CityDetails;
