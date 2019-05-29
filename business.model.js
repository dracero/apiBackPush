const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let webPush = new Schema(
  { //variable: Object
    endpoint: String /*,
    expirationdate: String,
    keys:[{ p256h: String, auth: String }]*/
  },
  { collection: "oldstore" }
);

module.exports = mongoose.model("webPush", webPush);
