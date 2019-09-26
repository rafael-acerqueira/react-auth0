const express = require('express')
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
require('dotenv').config()

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
	}),

	audience: process.env.REACT_APP_AUTH0_AUDIENCE,
	issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}`,

	algorithms: ['RS256']
})

const app = express()

app.get('/public', (req, res) => {
	res.json({ message: 'Hello from public api' })
})

app.get('/private', checkJwt, (req, res) => {
	res.json({ message: 'Hello from private api' })
})

app.listen(3001, (req, res) => {
	console.log('API Running')
})
