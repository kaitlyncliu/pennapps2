import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ShareScreen from './screens/ShareScreen';
import Button from 'react-bootstrap/Button';

function App() {
	return (
		<BrowserRouter>
			<header>
				<Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav>
						<Container>
							<Nav.Link href="/">Home</Nav.Link>
						</Container>
						<Container>
							<Nav.Link href="/profile">Profile</Nav.Link>
						</Container>
						<Container>
							<Nav.Link href="/social">Social</Nav.Link>
						</Container>
					</Nav>
				</Navbar>
			</header>
			<main>
				<Container>
					<Routes>
						<Route path="/" element={HomeScreen} />
						<Route path="/profile" element={ProfileScreen} />
						<Route path="/restaurants/:id" element={RestaurantScreen} />
						<Route path="/share" element={ShareScreen.js} />
					</Routes>
				</Container>
			</main>
		</BrowserRouter>
	);
}

export default App;
