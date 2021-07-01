const axios = require('axios');
require('dotenv').config();

const fetchImages = async (searchString, page) => {
    const options = {
        method: 'GET',
        url: 'https://bing-image-search1.p.rapidapi.com/images/search',
        params: { q: searchString, offset: Number((page * 10) - 1), count: 10 },
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com'
        }
    };

    try {
        const res = await axios.request(options);
        const { value } = await res.data;
        const data = value.map(itm => ({ description: itm.name, imageURL: itm.contentUrl, pageURL: itm.hostPageUrl }));
        return data;
    } catch (err) { console.error(err) }
};

module.exports = fetchImages;