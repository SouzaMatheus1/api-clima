const axios = require('axios');

const API_KEY = process.env.API_KEY;
const API_URL = process.env.BASE_URL;

async function fetchClima(cidade){
    const params = {
        q: cidade,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt_br'
    };

    const response = await axios.get(API_URL, { params });
    return response.data;
}

module.exports = { fetchClima }