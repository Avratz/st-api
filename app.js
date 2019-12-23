const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
const uri = process.env.DB_CONNECTION

// middlewares
app.use(cors())
app.use(express.json())

// Routes
const userRoute = require('./routes/user/user.route')
const presupuestoRoute = require('./routes/presupuesto/presupuesto.route')
app.use('/user', userRoute)
app.use('/presupuesto', presupuestoRoute)

//Connect to DB
mongoose.connect(
	uri,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Connected to DB')
	}
)

app.listen(port, () => {
	console.log('Server is running')
})
