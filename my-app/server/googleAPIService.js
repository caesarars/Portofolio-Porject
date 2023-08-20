const axios = require("axios");

const RAPIDAPI_ENDPOINT_URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const HOST_NAME = 'google-translate1.p.rapidapi.com';
const RAPID_API_HOST_KEY = '6198c1d163mshb928fcc8709506ep1830c2jsnb38690234658';

const option = {
    method : 'POST',
    url : RAPIDAPI_ENDPOINT_URL,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': RAPID_API_HOST_KEY,
        'X-RapidAPI-Host': HOST_NAME
    }
}

const getTranslate = async (word) => {
    try {
        const words = word
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', words);
        encodedParams.set('target', 'id');
        encodedParams.set('source', 'en');
        option.data = encodedParams
        const response = await axios.request(option)
        return response.data
    }catch(e) {
        console.log(e)
    }
}

module.exports = {
    getTranslate,
  };