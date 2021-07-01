const mongoose = require('mongoose');
require('dotenv').config();

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, mongoOptions);
        console.log('Database Connected');
    } catch (err) { console.error(err) }
};

module.exports = connectDataBase;