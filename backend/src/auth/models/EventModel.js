const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Event Schema
const eventSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true,
    },
    eventDescription: {
      type: String,
      required: true,
      trim: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventTime: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
