const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://boina:boina123@cluster0.xkb73sk.mongodb.net/movies", { useNewUrlParser: true }, { useUnifiedTopology: true })

const movieSchema = {
    username: String,   
}

const movie = mongoose.model('movies', movieSchema);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/admin.html')
})

app.post('/', function(req, res) {
    let newMovie = new movie({
        username: req.body.title,
    });

    newMovie.save();
    res.redirect('/')
})

app.listen(3001, function() {
    console.log("server is running");
})