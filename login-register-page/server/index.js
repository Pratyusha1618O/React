const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const ClientModel = require('./models/Clients')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/seva");

app.post('/signup', (req, res) => {
    ClientModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

app.listen(3000, ()=>{
    console.log("server is running"); 
})

