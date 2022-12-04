import React from 'react';
import { useState, useEffect, useParams } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './CityDetails.css';

function CityDetails({
	weatherDataLocation,
	weatherDataCurrent,
	currentYelpHotelData,
	currentYelpFoodData,
	// covidInfo,
	newsData,
}) {
	// if (!newsData)
	// 	return (
	// 		<div>
	// 			<h2>NOT WORKING </h2>
	// 		</div>
	// 	);
	return (
		<div className='wholediv'>
			{weatherDataLocation ? (
				<h2 style={{ color: 'whitesmoke' }} className='locationH2'>
					{weatherDataLocation.name}
				</h2>
			) : (
				<h2 style={{ color: 'whitesmoke' }} className='locationH2'>
					Location Not Found
				</h2>
			)}

			{weatherDataLocation ? (
				<h4 style={{ color: 'whitesmoke' }} className='locationH4'>
					{weatherDataLocation.country}
				</h4>
			) : (
				<h4 style={{ color: 'whitesmoke' }} className='locationH4'>
					The API could not find the requested location
				</h4>
			)}
			{/* {weatherDataLocation.region ? (
				<h4 style={{ color: 'whitesmoke' }} className='locationH4'>
					{weatherDataLocation.region}, {weatherDataLocation.country}
				</h4>
			) : (
				<h4 style={{ color: 'whitesmoke' }} className='locationH4'>
					{weatherDataLocation.country}
				</h4>
			)} */}

			<div className='cityDetailsContainerDiv'>
				<div className='cityDetailsCards'>
					<Row xs={1} md={2} lg={3} xl={4}>
						{weatherDataCurrent ? (
							<Col>
								<div className='weathercard'>
									<Card bg='light' border='light' className='custom-card'>
										<Card.Title>The current weather</Card.Title>
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
								</div>
							</Col>
						) : (
							<Col>
								<div className='weathercard'>
									<Card bg='light' border='light' className='custom-card'>
										<Card.Title>Weather information not found</Card.Title>
										<Card.Body>
											<Card.Text>
												The API could not find the weather for the requested
												location.
											</Card.Text>
										</Card.Body>
									</Card>
								</div>
							</Col>
						)}

						<br />
						<Col>
							{newsData.results && (
								<div className='carousel-item active img-fluid newscard'>
									<h4 style={{ color: 'white' }}>
										Current news from the area:
									</h4>
									<Carousel interval={null} className='custom-carousel'>
										{newsData.results
											.filter((item) => item.language === 'english')
											// .filter((item) => item.image_url !== null)
											.map((item) => {
												return (
													<Carousel.Item key={item.source_id}>
														<img
															className='d-block w-100'
															style={{
																height: '30vh',
																// width: '75%',
																objectFit: 'contain',
																// overflow: 'hidden',
															}}
															src={item.image_url}
															alt={item.title}
														/>
														<Carousel.Caption>
															<a
																className='hotel-img-link'
																href={item.link}
																target='_blank'>
																{item.title}
															</a>
														</Carousel.Caption>
													</Carousel.Item>
												);
											})}
									</Carousel>
								</div>
							)}
							{!newsData.results && (
								<div className='newscard'>
									<h4 style={{ color: 'white' }}>
										Current news from the area:
									</h4>
									<h4 style={{ color: 'gray' }}>
										NewsData API does not support this country!{' '}
									</h4>
								</div>
							)}
						</Col>
						<br />
						<Col>
							{currentYelpHotelData.businesses && (
								<div className='carousel-item active img-fluid hotelcard'>
									<h4 style={{ color: 'white' }}>Some hotels in the area:</h4>
									<Carousel className='custom-carousel'>
										{currentYelpHotelData.businesses.map((item) => {
											return (
												<Carousel.Item key={item.id}>
													<img
														className='d-block w-100'
														style={{
															height: '30vh',
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
								<div className='hotelcard'>
									<h4 style={{ color: 'white' }}>Some hotels in the area:</h4>
									<h4 style={{ color: 'gray' }}>
										YelpAPI does not support this country!{' '}
									</h4>
								</div>
							)}
						</Col>
						<Col>
							{currentYelpFoodData.businesses && (
								<div className='carousel-item active img-fluid foodcard'>
									<h4 style={{ color: 'white' }}>
										Some restaurants in the area:
									</h4>
									<Carousel className='custom-carousel'>
										{currentYelpFoodData.businesses.map((item) => {
											return (
												<Carousel.Item key={item.id}>
													<img
														width={50}
														height={50}
														className='d-block w-100'
														style={{
															height: '30vh',
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
								<div className='foodcard'>
									<h4 style={{ color: 'white' }}>
										Some restaurants in the area:
									</h4>
									<h4 style={{ color: 'gray' }}>
										YelpAPI does not support this country!{' '}
									</h4>
								</div>
							)}
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default CityDetails;
