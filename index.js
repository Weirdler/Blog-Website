const express = require('express')
const mysql = require('mysql')
const app = express();


const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'avacado1219',
    database : 'blog'
});
const blogData = [{taskItem: "spicy"}]

app.set("view engine","ejs");
app.use(express.static('./public'));

db.connect(function(err){
    if(err) {throw err}
    console.log("gucci gang")
})
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

// sql stuff for new blog
// database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE blog'
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database blog was created');
    });
});
// table
app.get('/createtb', (req, res) => {
    let sql = "CREATE TABLE posts ( ID int NOT NULL AUTO_INCREMENT, Title varchar(255), Body varchar(255), PRIMARY KEY (ID))"
    db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table posts created')
    })
});

// adding post
app.get('/addpost/:id', (req, res) => {
    let post = {title: '' , body: ''};
    let sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('post' + req.params.id + 'has been added to table posts')
    })

});

// viewing all posts
app.get('/getposts', (req, res) => {
    let sql = "select * from posts";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result)
    })
});

// viewing posts
app.get('/getpost/:id', (req, res) => {
    let sql = "select * from posts WHERE ID =" + req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('post '+ req.params.id + ' gotten');
    })

});

// delete post
app.get('/deletepost/:id', (req, res) => {
    let sql = "DELETE FROM posts WHERE ID =" + req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table data deleted')
    })

});



app.listen(3000, function(err){
    if (err){
        console.log(err)
    }
    console.log('u mega gay times 3000')
});