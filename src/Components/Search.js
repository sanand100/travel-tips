///// Search.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CityDetails from './CityDetails';
import SearchForm from './SearchForm';
import Container from 'react-bootstrap/Container';

function Search({ searchOptions }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const requestedSearch = searchParams.get('searchString');
	const [searchString, setSearchString] = useState(requestedSearch || '');
	const [lastSearch, setLastSearch] = useState('');
	const [galleryImages, setGalleryImages] = useState([]);
	const [search, setSearch] = useState(false);

	const handleChange = (event) => {
		setSearchString(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getData(searchString);
	};

	const getData = (searchString) => {
		if (searchString) {
			const url = `${searchOptions.url}/collection?key=${
				searchOptions.key
			}&q=${searchString.toLowerCase()}&ps=20`;
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					setGalleryImages(res.artObjects);
					setLastSearch(searchString);
					setSearchParams({ searchString });
					setSearch(true);
					setSearchString('');
				})
				.catch(console.error);
		}
	};

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
			{search && (requestedSearch || lastSearch) && !!galleryImages.length && (
				<>
					<p>
						Showing results for{' '}
						<span style={{ fontStyle: 'italic' }}>{lastSearch}:</span>{' '}
					</p>
					<CityDetails
						images={galleryImages}
						getGalleryImages={getData}
						searchOptions={searchOptions}
					/>
				</>
			)}
			{search && !galleryImages.length && (
				<p>
					No results found for{' '}
					<span style={{ fontStyle: 'italic' }}>{lastSearch}</span>. Please try
					another search
				</p>
			)}
		</Container>
	);
}

export default Search;
