const mongoose = require("mongoose");
require("dotenv").config(); 

async function connectMongoDB() {
  try {
    let MONGODB_URI;

    if (process.env.NODE_ENV === "production") {
      MONGODB_URI = process.env.MONGODB_PROD_URI;
    } else if (process.env.NODE_ENV === "development") {
      MONGODB_URI = process.env.MONGODB_DEV_URI;
    }
 
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected successfully to database`);
  } catch (error) {
    console.log("MongoDB connection failed:", error);
  }
}

module.exports = connectMongoDB;
