const express = require('express');
const app = express();
const axios = require('axios');
const validateNumber = require('./validateNumber').validateNumber;

const number ='94887799';

app.post('/validateNumber', async(req, res, next)=>{
    const options = validateNumber(req.body.number);

    try{
        const response = await axios.request(result);
        res.json(response.data);
    }
    catch(err){
        console.error(error);
    }
});
app.listen(3000);