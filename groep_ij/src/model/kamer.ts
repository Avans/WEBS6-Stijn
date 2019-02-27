// app/models/user.js
// load the things we need
import * as mongoose from 'mongoose';
export let Schema = mongoose.Schema;

var bcrypt   = require('bcrypt-nodejs');


export interface Kamer extends mongoose.Document {
    name: String;
    price: Number
}

// define the schema for our user model
var kamerSchema = new Schema({

    name: { Type: String},
    price: { Type: Number}

});

export let KamerModel = mongoose.model<Kamer>('Kamer', kamerSchema);