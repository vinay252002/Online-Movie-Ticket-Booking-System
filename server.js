const express = require('express')
const mongoose = require('mongoose')
const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');

mongoose.connect('mongodb+srv://boina:boina123@cluster0.xkb73sk.mongodb.net/movies',{useNewUrlParser: true},{useUnifiedTopology: true});

const movieSchema ={
    username: String,
    date: String,
}

const Movie = mongoose.model('movies',movieSchema)


app.get('/',(req,res)=>{
   Movie.find({},function(err,movies){
     res.render('homepage',{
        moviesList: movies
     })
   })
})
app.listen(4000,function(){
    console.log('server is running');
})