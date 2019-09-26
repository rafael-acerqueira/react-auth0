import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ auth }) => {
	const { isAuthenticated, logout, login } = auth
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="profile">Profile</Link>
				</li>
				<li>
					<Link to="public">Public</Link>
				</li>
				{isAuthenticated() && (
					<li>
						<Link to="private">Private</Link>
					</li>
				)}

				<li>
					<button onClick={isAuthenticated() ? logout : login}>
						{isAuthenticated() ? 'Log out' : 'Log in'}
					</button>
				</li>
			</ul>
		</nav>
	)
}
export default Navbar
