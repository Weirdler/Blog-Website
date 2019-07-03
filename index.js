const express = require('express')
const app = express();

app.set("view engine","ejs");
app.use(express.static('./public'));

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

app.listen(3000, function(err){
    if (err){
        console.log(err)
    }
    console.log('u mega gay times 3000')
});