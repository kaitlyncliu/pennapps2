import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar variant="tabs" defaultActiveKey="/home">
					<Nav.Item>
						<Nav.Link href="/home">Active</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-1">Option 2</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="disabled" disabled>
							Disabled
						</Nav.Link>
					</Nav.Item>
				</Navbar>
			</BrowserRouter>
		</div>
	);
}

export default App;
