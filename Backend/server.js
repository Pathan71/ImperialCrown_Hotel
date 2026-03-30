import express from 'express'
import "dotenv/config"
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
// Mongodb
import connectDB from './config/db.js'
// Cloudinary
// import connectCloudinary from './config/cloudinary.js'

import clerkWebhooks from './controllers/clerkWebhooks.js'
import userRouter from './routes/userRoutes.js'
import hotelRouter from './routes/hotelRoutes.js'
import roomRouter from './routes/roomRoutes.js'
import bookingRouter from './routes/bookingRoutes.js'
import { stripeWebhooks } from './controllers/stripeWebhooks.js'

const app = express()

// app.use(cors())
app.use(cors());

// Mongodb 
connectDB()
// Cloudinary
// connectCloudinary()

import fs from "fs";

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.use("/uploads", express.static("uploads"));

// PORT
const PORT = process.env.PORT || 3000

// API to listen to Stripe Webhooks
app.post('/api/stripe', express.raw({type: 'application/json'}), stripeWebhooks);


// Clerk Middleware
app.use(express.json())
app.use(clerkMiddleware());

// Api to listen to clerk webhooks
app.use('/api/clerk', clerkWebhooks);

// Routes
app.use('/api/user', userRouter)
app.use("/api/hotels", hotelRouter);
app.use('/api/rooms', roomRouter)
app.use('/api/bookings', bookingRouter)

app.get('/', (req, res) => {
    res.send("API IS WORKING...")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})