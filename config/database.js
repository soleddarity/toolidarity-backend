const mongoose = require('mongoose');
require('dotenv').config()

// Config DB Connection

const mongoDB = process.env.MANGO_URI;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
console.log(process.env);

module.exports = mongoose;

