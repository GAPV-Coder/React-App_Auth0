import "./App.css";
import Spinner from "react-bootstrap/Spinner";
import LoginButton from "./components/LoginButton";
import Profile from "./Profile";
import LogoutButton from "./components/LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<>
				<Spinner animation="border" variant="primary">
					<h1>Is loading...</h1>
				</Spinner>
			</>
		);
	}

	return (
		<div className="App">
			<h1>Aplication Auth0</h1>
			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
			<Profile />
		</div>
	);
}

export default App;
