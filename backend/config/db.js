const mongoose = require("mongoose");


const connectToDB = () => {
    mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`connected DB :  ${conn.connection.host}`)
    })
    .catch((err) => {

        console.log(err);
        process.getMaxListeners(1)
    })
};

module.exports = connectToDB;