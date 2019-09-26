const express = require('express')
require('dotenv').config()

const app = express()

app.get('/public', (req, res) => {
	res.json({ message: 'Hello from public api' })
})

app.listen(3001, (req, res) => {
	console.log('API Running')
})
