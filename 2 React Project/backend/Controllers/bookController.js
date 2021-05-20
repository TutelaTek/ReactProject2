const mongoose = require('mongoose');
const bookSchema = require("../Models/books");


const book_list = async(req, res) => {
    const book = await bookSchema.find({});
    
    res.send(book);
};

const update_book = async (req, res) => {
    const userData = req.body;
    console.log(userData);
    
    await bookSchema.findByIdAndUpdate(req.params.id,
        {
          $set: req.body,
        })
    .then(res.send('book updated')
    ).catch((err) => {
        console.log(err);
    });
}
const get_one = async(req, res) => {
    console.log(req.params.id);
    const book = await bookSchema.find({_id: req.params.id});
    
    res.send(book);
}

const post_book = async (req, res) => {
    const userData = req.body;
    
    console.log(userData);
    await bookSchema.create(userData)
    .then(res.send('book added')
    ).catch((err) => {
        console.log(err);
    });
}


const delete_book = async (req, res) => {
    const userData = req.body;
    console.log(userData);
    
    await bookSchema.deleteOne({_id: userData.id})
    .then(res.send('book deleted')
    ).catch((err) => {
        console.log(err);
    });
}



module.exports = {
    book_list,
    post_book,
    delete_book,
    update_book,
    get_one
}