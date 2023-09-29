const mongoose = require('mongoose');
const colors = require('colors');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Server is connected to mongoDB.`.bgBlack.green)
    } catch (error) {
        console.log(`MongoDB Error: ${error} `);
    }
}

module.exports = connectdb