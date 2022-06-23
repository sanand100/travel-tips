import Header from './Components/Header';
import './App.css';
import HomeAndSearch from './Components/HomeAndSearch';
import SearchForm from './Components/SearchForm';
import Search from './Components/Search';
import { ReactRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CityDetails from './Components/CityDetails';
import Navigation from './Components/Navigation';
import Inspiration from './Components/Inspiration';
import axios from 'axios';

function App() {
	// const [searchOptions, setSearchOptions] = useState({
	// 	key: process.env.REACT_APP_RIJKS_KEY,
	// 	url: 'https://www.rijksmuseum.nl/api/en/',
	// 	numberOfResults: 15,
	// });

	return (
		<div>
			<header>
				<Header />
			</header>

			<nav>
				<Navigation />
			</nav>
			<main>
				{/* <SearchForm /> */}
				{/* <HomeAndSearch /> */}
				{/* <CityDetails /> */}
				<Routes>
					<Route path='/inspiration' element={<Inspiration />} />
					<Route path='/weather' element={<CityDetails />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
