import React from 'react'

const Home = ({ auth }) => (
	<div>
		<h1>Home</h1>
		<button onClick={auth.login}>Login</button>
	</div>
)

export default Home
