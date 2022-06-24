import Header from './Components/Header';
import './App.css';
// import HomeAndSearch from './Components/HomeAndSearch';
import Search from './Components/Search';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CityDetails from './Components/CityDetails';
import Navigation from './Components/Navigation';
import Inspiration from './Components/Inspiration';
// import axios from 'axios';

function App() {
	const [currentWeather, setCurrentWeather] = useState({});
	const [currentYelpHotelData, setCurrentYelpHotelData] = useState([]);
	const [currentYelpFoodData, setCurrentYelpFoodData] = useState([]);
	const [backgroundImage, setBackgroundImage] = useState({});
	const [searchOptions, setSearchOptions] = useState({
		key: process.env.REACT_APP_WEATHER_KEY,
		url: 'https://api.weatherapi.com/v1/current.json?key=',
		numberOfResults: 15,
	});

	return (
		<div>
			<header>
				<Header backgroundImage={backgroundImage} />
			</header>

			<nav>
				<Navigation />
			</nav>
			<main>
				{/* <Search /> */}
				{/* <SearchForm /> */}
				{/* <HomeAndSearch /> */}
				{/* <CityDetails /> */}
				<Routes>
					<Route path='/inspiration' element={<Inspiration />} />
					<Route
						path='/weather'
						element={
							<CityDetails
								weatherDataLocation={currentWeather.location}
								weatherDataCurrent={currentWeather.current}
								currentYelpHotelData={currentYelpHotelData}
								currentYelpFoodData={currentYelpFoodData}
							/>
						}
					/>
					<Route
						path='/home'
						element={
							<Search
								searchOptions={searchOptions}
								currentWeather={currentWeather}
								setCurrentWeather={setCurrentWeather}
								currentYelpHotelData={currentYelpHotelData}
								setCurrentYelpHotelData={setCurrentYelpHotelData}
								currentYelpFoodData={currentYelpFoodData}
								setCurrentYelpFoodData={setCurrentYelpFoodData}
								backgroundImage={backgroundImage}
								setBackgroundImage={setBackgroundImage}
								// backgroundImage={back}
							/>
						}
					/>

					<Route path='*' element={<Navigate to='/home' />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
