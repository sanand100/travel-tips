///////Navigation.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect variant='dark' expand='md' className='nav-text'>
			{/* <Navbar.Brand as={Link} to='/home'>
				Rijksgalerij
			</Navbar.Brand> */}
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link as={Link} to='/home'>
						Home
					</Nav.Link>
					<Nav.Link as={Link} to='./inspiration'>
						Inspiration
					</Nav.Link>
					{/* <Nav.Link as={Link} to='/weather'>
						Weather Information
					</Nav.Link> */}
					{/* <Nav.Link as={Link} to='/search'>
						Search
					</Nav.Link> */}
					{/* <Nav.Link as={Link} to='/about'>
						About
					</Nav.Link> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
