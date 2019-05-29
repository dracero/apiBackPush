const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let webPush = new Schema(
  {
    endpoint: String,
    expirationTime: Date,
    keys: []
  },
  { collection: "oldstore" }
);

module.exports = mongoose.model("webPush", webPush);
