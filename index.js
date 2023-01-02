const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const validateNumber = require('./validateNumber').validateNumber;

const number ='94887799';
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/validateNumber', async(req, res, next)=>{
    const options = validateNumber(req.body.number);
    try{
        const response = await axios.request(options);
        res.json(response.data);
    }
    catch(err){
        console.error(err);
    }
});

app.listen(3000, ()=>{
    console.log(`App is running on Port 3000`);
});