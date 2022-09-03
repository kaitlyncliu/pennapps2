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
				<Nav expand="lg">
					<Nav.Item>
						<Link to="/">Home</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/profile">Profile</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/social">Social</Link>
					</Nav.Item>
				</Nav>
			</header>
			<main>
				<Container></Container>
			</main>
		</BrowserRouter>
	);
}

export default App;
