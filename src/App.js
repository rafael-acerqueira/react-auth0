import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

function App () {
	return (
		<>
			<Navbar />
			<div className="body">
				<Route path="/" exact component={Home} />
				<Route path="/profile" component={Profile} />
			</div>
		</>
	)
}

export default App
