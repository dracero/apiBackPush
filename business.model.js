const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let webPush = new Schema({
  objectID: {
    type: Map,
    of: String
   }
 },
 {collection: 'oldstore'});


module.exports = mongoose.model('webPush', webPush);
