import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Button from 'react-bootstrap/Button';

function App() {
	return (
		<BrowserRouter>
			<header>
				<Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />

					<Nav>
						<Container>
							<Nav.Link href="#home">Home</Nav.Link>
						</Container>
						<Container>
							<Nav.Link href="#profile">Profile</Nav.Link>
						</Container>
						<Container>
							<Nav.Link href="#social">Social</Nav.Link>
						</Container>
					</Nav>
				</Navbar>
			</header>
			<main>
				<Container></Container>
			</main>
		</BrowserRouter>
	);
}

export default App;
