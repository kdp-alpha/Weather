const express = require('express');
const app = express();
const hostname = 'localhost'
const port = 8080;
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();
const axios = require('axios')


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(port,hostname,()=>{
    console.log(`Server is running ${hostname}`);
})


app.post('/',async(req,res) => {
    const {city} = req.body

    

    const weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.api_key}&q=${city}&aqi=no`)
    await res.send(weather.data)
     
})