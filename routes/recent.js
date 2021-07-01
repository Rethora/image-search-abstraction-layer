const express = require('express');
const router = express.Router();

const Search = require('../models/recent-searches');

router.get('/', (req, res) => {
    Search.find({}, null, { sort: { date: 1 } }, (err, docs) => {
        if (err) return console.error(err);
        const recentSearches = docs.map(doc => doc.searchString);
        return res.json({ "Recent searches": recentSearches });
    })
});

module.exports = router;