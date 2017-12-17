const express = require('express');
const session =  require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Task = require('./api/models/todoModel');
const User = require('./api/models/userModel');
const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://aneogi:qwer@ds135394.mlab.com:35394/taskapi');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret:"catsarealiens",
    resave:false,
    saveUninitialized:false,
    cookie:{}
}))
app.get('/', (req,res)=>{
    res.send(`<div>hello</div>`)
    var sess= req.session;
    console.log(sess.userId)
})
var todoRoutes = require('./api/routes/todoRoutes');
var userRoutes = require('./api/routes/userRoutes');
userRoutes(app);
todoRoutes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);