const express = require('express');
const app = express();
const hostname = 'localhost'
const port = 8080;
require('dotenv').config();
const axios = require('axios')


app.listen(port,hostname,()=>{
    console.log(`Server is running ${hostname}`);
})


app.get('/',async(req,res) => {
    const weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.api_key}&q=Nasik&aqi=no`)
    res.send(weather.data)
    console.log(weather.data)
})