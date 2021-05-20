const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./Routes/bookRoutes');
const cors = require('cors')
const app = express();


// Connect to database
mongoose.connect('mongodb://localhost:27017/firstmongo', {useNewUrlParser: true, useUnifiedTopology: true})
.then( console.log("mongodb connected"))
.catch((err) => {
    console.log(err);
});

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/", bookRoutes);

app.listen(4000, () => {
    console.log("Server is running on port 4000")
});