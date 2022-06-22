import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import data from '../Data/inspirationData.json';

export default function Inspiration() {
	return (
		// 	<div style={{ display: 'block', width: 700, padding: 30 }}>
		// 		<h4>React-Bootstrap Carousel Component</h4>
		// 		<Carousel>
		// 			<Carousel.Item>
		// 				<img
		// 					className='d-block w-100'
		// 					src='https://source.unsplash.com/random?city'
		// 					alt='Image One'
		// 				/>
		// 				<Carousel.Caption>
		// 					<h3>Label for first slide</h3>
		// 					<p>Sample Text for Image One</p>
		// 				</Carousel.Caption>
		// 			</Carousel.Item>
		// 			<Carousel.Item>
		// 				<img
		// 					className='d-block w-100'
		// 					src='https://source.unsplash.com/random?city'
		// 					alt='Image Two'
		// 				/>
		// 				<Carousel.Caption>
		// 					<h3>Label for second slide</h3>
		// 					<p>Sample Text for Image Two</p>
		// 				</Carousel.Caption>
		// 			</Carousel.Item>
		// 		</Carousel>
		// 	</div>
		// );
		<Carousel style={{ minHeight: '70vh' }}>
			{data.map((item) => {
				return (
					<Carousel.Item key={item.id} style={{ maxHeight: '70vh' }}>
						<img
							className='d-block w-100'
							style={{
								height: '90vh',
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
							src={item.image_url}
							alt={item.name}
						/>
						<Carousel.Caption>
							<p>
								{item.name} in {item.location.city}
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}
