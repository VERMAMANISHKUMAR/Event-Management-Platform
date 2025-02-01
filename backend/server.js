const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const connectMongoDB = require('./Config/connectMongoDB');
const userController = require('./src/auth/controller/userController');
const eventRoutes = require('./Event Routes/eventRoutes'); 

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3800;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', eventRoutes);

app.use('/api/auth', userController);

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Authentication Backend Server!');
});
app.get('/home', (req, res) => {
    res.send('Welcome to Home!');
});
app.get('/about', (req, res) => {
    res.send('Welcome to Abouts!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectMongoDB();
});
