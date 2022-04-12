const mongoose = require('mongoose');
const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb+srv://Arnold:tiIrRtRxguL636mK@cluster0.owcjk.mongodb.net/kodemiaStore?retryWrites=true&w=majority",
        { useNewUrlParser: true }
        );
        const db = mongoose.connection;
        db.on("open", () => {
            console.log("Connection successful");
            resolve(mongoose);
        });
        db.on("error", (err) => {
            console.error("Connection failed: ", err);
            reject(err);
        });
    });
};

module.exports = { connect };