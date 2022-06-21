import Header from './Components/Header';
import './App.css';
import HomeAndSearch from './Components/HomeAndSearch';
import SearchForm from './Components/SearchForm';
import Search from './Components/Search';
import { ReactRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CityDetails from './Components/CityDetails';

function App() {
	const [searchOptions, setSearchOptions] = useState({
		key: process.env.REACT_APP_RIJKS_KEY,
		url: 'https://www.rijksmuseum.nl/api/en/',
		numberOfResults: 15,
	});
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<SearchForm />
				{/* <HomeAndSearch /> */}
				<CityDetails />
				{/* <Routes>
					<Route
						path='/search'
						element={<Search searchOptions={searchOptions} />}
					/>
					;
				</Routes> */}
			</main>
		</div>
	);
}

export default App;
