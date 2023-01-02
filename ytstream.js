require('dotenv').config();

module.exports = {
    ytstream : (youtubeUrl) =>{
        const options = {
          method: 'GET',
          url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
          params: {id: youtubeUrl},
          headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
            'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
          }
        };
        return options
    }
}