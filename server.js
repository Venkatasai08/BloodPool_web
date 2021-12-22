const express = require("express");

const app = express();
const path = require("path");
const router = express.Router();
const {store,find,login,findind,findbybg,findall} = require("./contorller.js");
// const {find} = require("./search.js");
const bodyParser = require('body-parser');







app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));

});


app.get('/login',(req,res) =>{
    res.sendFile(path.join(__dirname + '/login.html'))
})
app.get('/register',(req,res) =>{
    res.sendFile(path.join(__dirname + '/index.html'))
})
app.get('/search',(req,res)=>{
    res.sendFile(path.join(__dirname + '/search.html'))
})

app.post('/store',store);
app.post('/find',find);
app.post('/loginpost',login);
app.get('/find/:id',findind);
app.get('/search/:bg',findbybg);
app.get('/find',findall)














app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log('Running at Port 3000');