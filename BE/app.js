const express = require('express')
const app = express()
const router = require('./routers')

app.use('/', router)