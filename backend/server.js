const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const connectMongoDB = require('./Config/connectMongoDB');
const userController = require('./src/auth/controller/userController');
const eventRoutes = require('./Event Routes/eventRoutes'); 
// const upload = require('./src/auth/middleware/upload');
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3800;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Serve images from the "uploads" folder

app.use('/api', eventRoutes);
app.use('/api/auth', userController);


// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Authentication Backend Server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectMongoDB();
});
