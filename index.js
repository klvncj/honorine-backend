require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5600
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')

// Middleware
app.use(cors())
app.use(express.json())

// Connect DB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port on port ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
})

//Routes
app.use('/api/v1/users', userRoute)
app.use('/api/v1/product', productRoute)

// API
app.get('/', (req, res) => {
    res.json("API running new...")
})