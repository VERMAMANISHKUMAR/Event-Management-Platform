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
const PORT = process.env.PORT || https://event-management-platform-frontends.onrender.com;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', eventRoutes);

app.use('/api/auth', userController);



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectMongoDB();
});
