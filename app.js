const express = require('express')
const app = express()

// mongoose
const mongoose = require('mongoose')

//dotenv
require('dotenv/config')


// Import Routes
const userRoute = require('./routes/user/user.route')

app.use('/user', userRoute)

app.get('/', (req,res) => {
    res.send('asd')
})


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

app.listen(5000)