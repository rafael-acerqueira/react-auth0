import React, { useEffect } from 'react'

const Callback = ({ auth, location }) => {
	useEffect(() => {
		if (/access_token|id_token|error/.test(location.hash)) {
			auth.handleAuthentication()
		} else {
			throw new Error('Invalid callback Url')
		}
	}, [auth, location.hash])

	return <h1>Loading...</h1>
}

export default Callback
