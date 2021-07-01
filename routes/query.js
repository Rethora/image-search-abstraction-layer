const express = require('express');
const router = express.Router();

const Search = require('../models/recent-searches');

const fetchImages = require('../controllers/api-route');

router.get('/:searchString', async (req, res) => {
    const { searchString } = req.params;
    let { page } = req.query;
    if (!page) page = 1;
    const data = await fetchImages(searchString, page);
    if (data.length === 0) return res.send('No results...');
    Search.findOneAndUpdate({ searchString: searchString }, { $set: { date: new Date() } }, (err, docs) => {
        if (err) return console.error(err);
        if (!docs) {
            Search.create({ searchString: searchString }, (err, done) => {
                if (err) console.error(err);
                return console.log('Successfully saved search string to recents.')
            });
        } else {
            return console.log('Successfully updated date on present recent search');
        }
    })
    res.json({Results: data});
});

module.exports = router;
