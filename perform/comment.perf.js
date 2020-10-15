const dotenv = require('dotenv');
dotenv.config();
const {connectToServer, getDB} = require('../services/mongo.conn');

const CWBlog = require('../class/blog.class');
const CWComment = require('../class/comment.class');

connectToServer((err) => {
    if (!err) console.log('MongoDB Connected.');

    // const db = getDB();

    // db.createCollection('Blog',
    //     {
    //         capped: false,
    //         autoIndexId: true,
    //     }, (err, result) => {
    //         if (err) console.log(err);
    //         console.log(result);
    //     }
    // );
    //
    // db.createCollection('Comment', {
    //     capped: false,
    //     autoIndexId: true,
    // }, (err, result) => {
    //     if (err) console.log(err);
    //     console.log(result);
    // });

    // console.log(db);
    const comment = new CWComment();

    let content = `I think you made a pretty good point of that how to use Python to deploy a show case. However, i'd like to ask: how to deal with Spark on EC2? Can you describe more on the detail of the project itselft?`;

    comment
        .insertComment('Chris Yao', content, '5f88b79fb96cf55dd4570fa0')
        .then(r => console.log(r));


    content = `Wow! Amazing! Wonderful job! Hope you can post more! Thank you so much for your sharing!`;

    comment
        .insertComment('Jessica White', content, '5f88b79fb96cf55dd4570fa0')
        .then(r => console.log(r));


});


// const main = (() => {
//
//     //SETTING UP MONGODB TABLES HERE.
//
//
// })();