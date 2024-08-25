import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import blogRoutes from './routes/blog.js';
import activityListingRoutes from './routes/activityListing.js';
import hotelListingRoutes from './routes/hotelListing.js';
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';
import rentListingRoutes from './routes/rentListing.js';
import restaurantListingRoutes from './routes/restaurantListing.js';


// Initialize dotenv
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/* ROUTES */
app.use('/blogs', blogRoutes);
app.use('/properties', hotelListingRoutes);
app.use('/activities', activityListingRoutes);
app.use('/restaurants', restaurantListingRoutes);
app.use('/rentvehicle', rentListingRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Import the HotelListing and RestaurantListing models
import HotelListing from './models/HotelListing.js';
import RestaurantListing from './models/RestaurantListing.js';
import RentListing from './models/RentListing.js';
import ActivityListing from './models/ActivityListing.js';
import User from './models/User.js';
import Product from './models/Product.js';
import Blog from './models/Blog.js';

// Fetch counts endpoint
app.get('/api/stats', async (req, res) => {
  try {
    const hotelCount = await HotelListing.countDocuments();
    const restaurantCount = await RestaurantListing.countDocuments();
    const rentCount=await RentListing.countDocuments();
    const activityCount=await ActivityListing.countDocuments();
    const userCount=await User.countDocuments();
    const productCount=await Product.countDocuments();
    const blogCount=await Blog.countDocuments();
    res.json({ hotellistings: hotelCount, restaurantlistings: restaurantCount, rentlistings: rentCount, activitylistings: activityCount, users: userCount, products:productCount, blogs:blogCount  });
  } catch (err) {
    console.error('Failed to fetch counts:', err);
    res.status(500).json({ error: `Failed to fetch counts: ${err.message}` });
  }
});

/* MONGOOSE SETUP */
const PORT = 8000;
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: 'Exploring_Lanka',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
