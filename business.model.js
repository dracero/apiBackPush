const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let webPush = new Schema({
 myJsonProperty: Object
 /*endpoint: {
    type: Map,
    of: String
   }*/
},{collection: 'oldstore'});


module.exports = mongoose.model('webPush', webPush);
