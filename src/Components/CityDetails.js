import React from 'react';
import { useState, useEffect, useParams } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import './CityDetails.css';

function CityDetails({ weatherDataLocation, weatherDataCurrent }) {
	// const { city } = useParams();
	// const [weatherData, setWeatherData] = useState({});
	// const getWeatherData = () => {
	// 	let cityInput = 'boston';
	// 	const baseUrl =
	// 		'https://api.weatherapi.com/v1/current.json?key=b39f7c62b71b42a4b4732303221606&q=';
	// 	const url = `${baseUrl}${cityInput}&aqi=no`;
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((res) => setWeatherData(res))
	// 		.catch(console.error);
	// };

	// useEffect(() => {
	// 	getWeatherData();
	// }, []);

	// console.log(weatherData.location.name);
	if (!weatherDataLocation) return null;
	return (
		<Row xs={1} md={2} lg={3} xl={4}>
			<Col>
				<Card bg='light' border='light' className='custom-card'>
					<Card.Body>
						<Card.Text>
							<strong>
								{' '}
								{weatherDataLocation.name}, {weatherDataLocation.country}
							</strong>
							<br />
							Local Date and Time: {weatherDataLocation.localtime}
							<br />
							<img src={weatherDataCurrent.condition.icon} />
							{weatherDataCurrent.condition.text}
							<br />
							Local Temperature: {weatherDataCurrent.temp_f}&deg;F
							<br />
							Feels Like: {weatherDataCurrent.feelslike_f}&deg;F
							<br />
						</Card.Text>
					</Card.Body>
					{/* <Card.Footer> */}
					{/* <div>
						<Button variant='outline-light' className='btn-sm'>
							{' '}
							More Information
						</Button>
					</div> */}
					{/* </Card.Footer> */}
					{/* </Container> */}
				</Card>
			</Col>
		</Row>
	);
}

export default CityDetails;
