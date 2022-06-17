import React from 'react';
import './HomeAndSearch.css';
function HomeAndSearch(props) {
	return (
		<form>
			<label htmlFor='citySearch'>Where to?</label>
			<input type='text' id='citySearch' />
			<button type='submit'>Search</button>
		</form>
	);
}

export default HomeAndSearch;
