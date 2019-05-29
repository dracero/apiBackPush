const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let webPush = new Schema(
  {
    title: String,
    body: String 
    
  },
  { collection: "oldstore" }
);

module.exports = mongoose.model("webPush", webPush);
