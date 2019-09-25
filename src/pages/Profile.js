import React, { useState, useEffect } from 'react'

const Profile = ({ auth }) => {
	const [profile, setProfile] = useState({})
	const [error, setError] = useState('')

	useEffect(() => {
		auth.getProfile((profile, error) => {
			setProfile(profile)
			setError(error)
		})
	}, [auth])

	return (
		<>
			<h1>Profile</h1>
			<p>{profile.nicknme}</p>
			<img
				style={{ maxWidth: 50, maxHeight: 50 }}
				src={profile.picture}
				alt="profile pic"
			/>
			<pre>{JSON.stringify(profile, null, 2)}</pre>
		</>
	)
}

export default Profile
