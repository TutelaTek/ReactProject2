// models the database data
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String},
    author: { type: String},
    description: { type: String },
    price: {type: Number}
    

});
//collection namey
const model = mongoose.model('Books', bookSchema);

module.exports = model