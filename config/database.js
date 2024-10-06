const mongoose = require('mongoose');

require('dotenv').config();

const dbconnect = () => {
    mongoose.connect(process.env.URL)
        .then(() => {
            console.log('connected to database successfully');
        })
        .catch((error) => {
            console.log('issue in db connection' + error.message)
            process.exit(1);
        })
}
module.exports = dbconnect;