const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter')
const app = express();      


const port = process.env.port || 8888;


//db
mongoose.connect('mongodb://127.0.0.1:27017/StyleEye', {useNewUrlParser:true})
const db = mongoose.connection;

db.on("error", ()=>{console.log("error in connection");})
db.once('open', ()=>{console.log("connected");})  

app.set('view engine', 'ejs')
app.use(express.static('public'))


// parse application/json
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/', homeRouter)


app.listen(port)