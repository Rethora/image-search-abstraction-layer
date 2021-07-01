const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const search = new Schema(
    {
        searchString: { type: String, required: true },
        date: { type: Date, default: new Date() }
    },
    { versionKey: false }
);

module.exports = Model('recent-searches', search);