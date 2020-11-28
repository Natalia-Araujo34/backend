const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongo "mongodb+srv://hproject.peh5w.mongodb.net/projeto-narthuis" --username admin',
   {useCreateIndex: true, useNewUrlParser: true})

module.exports = app