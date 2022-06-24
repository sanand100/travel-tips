import React from 'react';
import { useState, useEffect, useParams } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import './CityDetails.css';

function CityDetails({
	weatherDataLocation,
	weatherDataCurrent,
	currentYelpHotelData,
	currentYelpFoodData,
}) {
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
		<div className='cityDetailsdiv'>
			<h2 style={{ color: 'whitesmoke' }}>{weatherDataLocation.name}</h2>
			{weatherDataLocation.region ? (
				<h4 style={{ color: 'whitesmoke' }}>
					{weatherDataLocation.region}, {weatherDataLocation.country}
				</h4>
			) : (
				<h4 style={{ color: 'whitesmoke' }}>{weatherDataLocation.country}</h4>
			)}
			<Row xs={1} md={2} lg={3} xl={4}>
				<Col>
					<Card bg='light' border='light' className='custom-card'>
						<Card.Body>
							<Card.Text>
								<img src={weatherDataCurrent.condition.icon} />
								{weatherDataCurrent.condition.text}
								<br />
								<br />
								Local Temperature: {weatherDataCurrent.temp_f}&deg;F
								<br />
								Feels Like: {weatherDataCurrent.feelslike_f}&deg;F
								<br />
								Local Date and Time: {weatherDataLocation.localtime}
							</Card.Text>
						</Card.Body>
					</Card>
					<br />
					<Card bg='light' border='light' className='custom-card'>
						<Card.Body>
							<Card.Text>
								<img src={weatherDataCurrent.condition.icon} />
								{weatherDataCurrent.condition.text}
								<br />
								<br />
								Local Temperature: {weatherDataCurrent.temp_f}&deg;F
								<br />
								Feels Like: {weatherDataCurrent.feelslike_f}&deg;F
								<br />
								Local Date and Time: {weatherDataLocation.localtime}
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					{currentYelpHotelData.businesses && (
						<div class='carousel-item active img-fluid'>
							<Carousel>
								{currentYelpHotelData.businesses.map((item) => {
									return (
										<Carousel.Item>
											<img
												width={50}
												height={50}
												className='d-block w-100'
												style={{
													height: '40vh',
													// width: '75%',
													objectFit: 'contain',
													// overflow: 'hidden',
												}}
												src={item.image_url}
												alt={item.name}
											/>
											<Carousel.Caption>
												<a
													className='hotel-img-link'
													href={item.url}
													target='_blank'>
													{item.name}
												</a>
											</Carousel.Caption>
										</Carousel.Item>
									);
								})}
							</Carousel>
						</div>
					)}
					{!currentYelpHotelData.businesses && (
						<h2>Yelp does not support this country! </h2>
					)}
				</Col>
				<Col>
					{currentYelpFoodData.businesses && (
						<div class='carousel-item active img-fluid'>
							<Carousel>
								{currentYelpFoodData.businesses.map((item) => {
									return (
										<Carousel.Item>
											<img
												width={50}
												height={50}
												className='d-block w-100'
												style={{
													height: '40vh',
													// width: '75%',
													objectFit: 'contain',
													// overflow: 'hidden',
												}}
												src={item.image_url}
												alt={item.name}
											/>
											<Carousel.Caption>
												<a
													className='hotel-img-link'
													href={item.url}
													target='_blank'>
													{item.name}
												</a>
											</Carousel.Caption>
										</Carousel.Item>
									);
								})}
							</Carousel>
						</div>
					)}

					{!currentYelpFoodData.businesses && (
						<h2>Yelp does not support this country! </h2>
					)}
				</Col>
			</Row>
		</div>
	);
}

export default CityDetails;
