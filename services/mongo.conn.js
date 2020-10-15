const {MongoClient} = require('mongodb');
// const assert = require('assert');
const url = 'mongodb://localhost:27017';
var db;
// Database Name

const connectToServer = (callback) => {
    MongoClient.connect(url, function (err, client) {
        // assert.equal(null, err);
        db = client.db(process.env.DBNAME);
        return callback(err);
        // client.close();
    });
};
const getDB = () => db;
module.exports = {connectToServer, getDB};