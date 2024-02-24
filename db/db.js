const mongoose = require('mongoose');

const db = () => {
    mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((con) => {
            console.log(
                `MongoDB Database connected with HOST: ${con.connection.host}`
            );
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error);
        });
};

module.exports = db;

