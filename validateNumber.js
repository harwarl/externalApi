require('dotenv').config();

module.exports = {
    validateNumber : (number) =>{
        const options = {
        method: 'GET',
        url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
        params: {number: number, country: 'UY'},
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
            'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com'
        }
        };
        return options;
    }
}