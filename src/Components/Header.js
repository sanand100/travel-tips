import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header({ backgroundImage }) {
	return (
		<header style={{ backgroundImage: `url(${backgroundImage})` }}>
			{/* <header> */}
			<Link to='/home' style={{ textDecoration: 'none' }}>
				<h1>TravelTips</h1>
				<h4>Your only travel-planning destination</h4>
			</Link>
		</header>
	);
}

export default Header;
