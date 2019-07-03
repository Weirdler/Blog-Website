const express = require('express')
const app = express();

const blogData = [{taskItem: "spicy"}]

app.set("view engine","ejs");
app.use(express.static('./public'));

app.get('/add_blog.ejs',(req, res) => {
    // rendering tasks with dummyData list
    res.render('add_blog', {taskToDo: blogData});
});

app.get('/home', function(req, res){
    console.log('bitch')
    res.render('home');
});
app.get('/home.ejs', function(req, res){
    console.log('bitch')
    res.render('home');
});

app.get('/bbloq.ejs', function(req, res){
    console.log('megafaggot'),
    res.render('bbloq')
});
app.get('/pbloq.ejs', function(req, res){
    console.log('bith lasag'),
    res.render('pbloq')
});
app.get('/add_blog.ejs', function(req, res){
    console.log('kekekekek'),
    res.render('add_blog')
});

app.listen(3000, function(err){
    if (err){
        console.log(err)
    }
    console.log('u mega gay times 3000')
});