import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Auth from './Auth/Auth'
import Callback from './pages/Callback'

const App = ({ history }) => {
	const [auth0, setAuth0] = useState(new Auth(history))

	return (
		<>
			<Navbar auth={auth0} />
			<div className="body">
				<Route
					path="/"
					exact
					render={props => <Home auth={auth0} {...props} />}
				/>
				<Route path="/profile" component={Profile} />
				<Route
					path="/callback"
					render={props => <Callback auth={auth0} {...props} />}
				/>
			</div>
		</>
	)
}

export default App
