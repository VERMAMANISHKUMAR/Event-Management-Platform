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

// ✅ CORS Configuration
const allowedOrigins = [
    'https://event-management-platform-frontend-bh5b.onrender.com'
   
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error('Blocked by CORS:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,  // Allows cookies and authorization headers
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api', eventRoutes);
app.use('/api/auth', userController);

// ✅ Connect to MongoDB & Start Server
connectMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
        console.log(`✅ Allowed Origins: ${allowedOrigins.join(', ')}`);
    });
}).catch((error) => {
    console.error('❌ MongoDB connection failed:', error);
});
