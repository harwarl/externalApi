const express = require('express');
const app = express();
const axios = require('axios');
const validateNumber = require('./validateNumber').validateNumber;
const ytstream = require('./ytstream').ytstream;

const number ='94887799';

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

app.post('/downloadyoutube', async(req, res, next) =>{
    const { url } = req.body.url;
    const options = ytstream(req.body.url);

    try{
        const response = await axios.request(options);
        res.json(response.data);
    }
    catch(err){
        console.error(err);
    }
})
app.listen(7000);