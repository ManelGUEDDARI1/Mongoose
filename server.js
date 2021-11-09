const express=require('express')
const mongoose = require('mongoose')
const app=express()
//create database with server
const mongoURI="mongodb+srv://Manel_G:manel1234@cluster0.b0zpw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoURI,{useNewUrlParser: true,useUnifiedTopology: true}, function(err) {
    err ?  console.log(err) : console.log('database is connected')
} )

  
//parse the data
app.use(express.json())
app.use('/Persons',require('./Routes/PersonRoutes'))
const port =5005

app.listen (port, (err)=>{
    err ? console.log(err) : console.log('The server is running on port 5005')
} )